exports.linkClick = async (req, res) => {
  try {
    const { id, state } = req.query;
    const userId = req.user._id;
    const misc = await Misc.find({});
    const advertise = await Advertise.findOne({
      $and: [{ userId }, { castId: id }],
    });
    if (advertise === null) {
      await new Advertise({
        castId: id,
        userId,
      }).save();
    }
    if (state === undefined || state === null) {
      const advertise = await Advertise.findOne({
        $and: [{ userId }, { castId: id }],
      });
      let pointsReward = misc[0].externalValue;
      if (advertise === null || advertise.isExternal === 0) {
        const updated = await User.findByIdAndUpdate(userId, {
          $inc: { points: pointsReward, pointsWon: pointsReward },
        });
        const historyUpdated = await new History({
          userId,
          castId: id,
          pointsWon: pointsReward,
          createdAt: new Date(),
          source: '활동 마이크',
        }).save();
        advertise.isExternal = 1;
        const recordUpdated = await advertise.save();
        const castUpdated = await Cast.findByIdAndUpdate(id, {
          $inc: { externalLinkClicks: 1 },
        });
        if (updated && historyUpdated && recordUpdated && castUpdated) {
          return res.status(200).json({
            Body: 'NO_OF_CLICKS_UPDATED',
            points: pointsReward,
          });
        } else {
          return res.status(400).json({
            Body: 'SOMETHING_WENT_WRONG',
          });
        }
      } else {
        await Cast.findByIdAndUpdate(id, {
          $inc: { externalLinkClicks: 1 },
        });
        return res.status(200).json({
          Body: 'USER HAS ALREADY GAINED REWARD FOR ONCLICK ',
        });
      }
    }
    if (state === 'share') {
      const advertise = await Advertise.findOne({
        $and: [{ userId }, { castId: id }],
      });
      let pointsReward = misc[0].shareValue;
      if (advertise === null || advertise.isShare === 0) {
        const updated = await User.findByIdAndUpdate(userId, {
          $inc: { points: pointsReward, pointsWon: pointsReward },
        });
        const historyUpdated = await new History({
          userId,
          pointsWon: pointsReward,
          castId: id,
          createdAt: new Date(),
          source: '공유 마이크',
        }).save();
        advertise.isShare = 1;
        const recordUpdated = await advertise.save();
        const castUpdated = await Cast.findByIdAndUpdate(id, {
          $inc: { noOfShares: 1 },
        });
        if (updated && historyUpdated && recordUpdated && castUpdated) {
          return res.status(200).json({
            Body: 'NO OF CLICKS UPDATED',
            points: pointsReward,
          });
        } else {
          return res.status(400).json({
            Body: 'SOMETHING WENT WRONG',
          });
        }
      } else {
        await Cast.findByIdAndUpdate(id, {
          $inc: { noOfShares: 1 },
        });
        return res.status(200).json({
          Body: 'USER HAS ALREADY GAINED REWARD FOR ONCLICK ',
        });
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      Body: 'NETWORK_ERROR',
    });
  }
};

exports.castResultAnnounced = async (req, res) => {
  try {
    let { id } = req.query;
    id = id.trim();
    if (id === undefined || id === '')
      return res.status(400).json({
        Body: 'CAST_ID_INVALID',
      });
    let cast = await Cast.findOne({
      _id: id,
      castState: { $in: ['result_announced', 'closed', 'closed_early'] },
    });
    if (!cast)
      return res.status(400).json({
        Body: 'CAST_NOT_FOUND',
      });

    let groupedResult = await Play.aggregate([
      {
        $match: { castId: ObjectID(id) },
      },
      {
        $group: {
          _id: '$userAnswer',
          count: { $sum: 1 },
          castId: { $first: '$castId' },
        },
      },
    ]);
    console.log('GROUP RESULT', groupedResult);
    let totalUserPlayed = cast.participatingUsers.length;
    groupedResult.forEach(item => {
      item['answer'] = item['_id'];
      item.percentage = parseFloat(
        (parseInt(item.count) / totalUserPlayed) * 100
      ).toFixed(2);
    });
    return res.status(200).json({
      percentage: groupedResult,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      Body: 'NETWORK_ERROR',
    });
  }
};
