const mongoose = require('mongoose');
const id = mongoose.Schema.Types.ObjectId;
const date = mongoose.Schema.Types.Date;

const userSchema = new mongoose.Schema({
  //displayImage Of The User
  userImage: {
    type: String,
    trim: true,
    default: null,
  },

  //Email Of The User
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true,
  },

  //Password Of The User
  password: {
    type: String,
    minlength: 6,
    maxlength: 128,
  },

  //Check For If Tutorial Taken
  isTutorial: {
    type: Boolean,
    default: false,
  },

  //Username Of The User
  username: {
    type: String,
    trim: true,
  },

  //Dob Of The User
  dob: {
    type: String,
    default: '880607',
  },

  //Gender Of The User
  gender: {
    type: String,
    trim: true,
    lowercase: true,
    default: 'woman',
  },

  //Check For If Verified
  isVerified: {
    type: Boolean,
    default: false,
  },

  //Last Login Of The User
  lastLogin: {
    type: date,
    //  default: null
  },

  //Number Of Comments Of The User
  no_of_comments: {
    type: Number,
    default: 0,
    // required:true
  },

  //Current Points Of The User
  points: {
    type: Number,
    default: 0,
  },

  //Cumulative Points Of The User
  pointsWon: {
    type: Number,
    default: 0,
  },

  //Number Of Casts User Participating Inn
  no_of_participating_casts: {
    type: Number,
    default: 0,
  },

  //Check For If Deactivated
  isDeactivated: {
    type: Boolean,
    default: false,
  },

  //Check For If Tutorial Skipped
  isSkipTutorial: {
    default: false,
  },

  //Token Of The User
  token: String,

  //Details After Registration Of A User Through Fb
  facebookProvider: [
    {
      _id: { type: String },
      token: { type: String },
    },
  ],

  //Status For Fb Login
  statusFb: {
    type: Number,
  },

  // ---------- Admin Specific ---------------- //

  //Admin Info During Update Profile Of A User
  updatedBy: {
    type: id,
    default: null,
  },

  //Check For League
  isLeague: {
    type: Number,
    default: 0,
  },
});