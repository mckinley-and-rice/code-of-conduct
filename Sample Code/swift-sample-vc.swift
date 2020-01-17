//
//  [].swift
//  []]
//
//  Created by Ricky on 8/29/19.
//  Copyright © 2019 []. All rights reserved.
//

import UIKit
protocol [] {
    func didChangePrizeAllocation()
}
class []: UIViewController {

    //MARK: IBOutlets
    @IBOutlet weak var topBackgroundView: UIView!
    @IBOutlet weak var prize1Background: UIView!
    @IBOutlet weak var prize2Background: UIView!
    @IBOutlet weak var prize3Background: UIView!
    @IBOutlet weak var saveBtn: UIButton!
    @IBOutlet weak var totalAmountLabel: UILabel!
    
    @IBOutlet var prizeLable2Amont: UILabel!
    @IBOutlet var prizeLable1Amont: UILabel!
    @IBOutlet weak var prize1Slider: UISlider!
    @IBOutlet weak var prize2Slider: UISlider!
    @IBOutlet weak var prize3Slider: UISlider!
    
    @IBOutlet var prizeLable3Amont: UILabel!
    @IBOutlet weak var prize1Label: UILabel!
    @IBOutlet weak var prize2Label: UILabel!
    @IBOutlet weak var prize3Label: UILabel!
    
    var delegate: ChangePrizeAllocationVCDelegate? = nil
    var alertView:CustomAlertView? = nil
    var enteredAmount:String = ""
    
    
    
    //MARK: Overriden view methods
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        //Default black background color
        self.view.addBlackBackgroundColor()
        prize1Label.text = String(describing: CreateContestRequestModel.sharedInstance.first!) + "%"
        prize2Label.text = String(describing: CreateContestRequestModel.sharedInstance.second!) + "%"
        prize3Label.text = String(describing: CreateContestRequestModel.sharedInstance.third!) + "%"
        
        
        prize3Slider.minimumValue = 0.00
        prize3Slider.maximumValue = 100.00
        
        prize1Slider.minimumValue = 0.00
        prize1Slider.maximumValue = 100.00
        
        prize2Slider.minimumValue = 0.00
        prize2Slider.maximumValue = 100.00
        
        
        prize1Slider.value = Float(CreateContestRequestModel.sharedInstance.first ?? 0.00)
        prize2Slider.value = Float(CreateContestRequestModel.sharedInstance.second ?? 0.00)
        prize3Slider.value = Float(CreateContestRequestModel.sharedInstance.third ?? 0.00)
        //Other view setup methods
        setupView()
    }
    func setupView() {
        
        //Background view setup
        topBackgroundView.addCornerRadius(radius: 10)
        prize1Background.addCornerRadius(radius: 10)
        prize2Background.addCornerRadius(radius: 10)
        prize3Background.addCornerRadius(radius: 10)
        
        topBackgroundView.addDarkGrayBackgroundColor()
        prize1Background.addDarkGrayBackgroundColor()
        prize2Background.addDarkGrayBackgroundColor()
        prize3Background.addDarkGrayBackgroundColor()
        
        //Buttons setup
        saveBtn.addCornerRadius()
        
        //Label setup
        totalAmountLabel.text = enteredAmount
    }
    //MARK: IBActions
    @IBAction func savePressed() {
        if checkForTotalPercentage() {
            CreateContestRequestModel.sharedInstance.first = Double(Int(prize1Slider.value))
            CreateContestRequestModel.sharedInstance.second = Double(Int(prize2Slider.value))
            CreateContestRequestModel.sharedInstance.third = Double(Int(prize3Slider.value))
            delegate?.didChangePrizeAllocation()
            self.navigationController?.popViewController(animated: true)
        }
    }
    @IBAction func backClicked() {
        self.navigationController?.popViewController(animated: true)
    }
    @IBAction func sliderChanged(_ sender:UISlider) {
        let str = "\(Int(sender.value))" + "%"
        if sender == prize1Slider {
            sender.accessibilityLabel = "60"
            prize1Label.text = str
        }
        else if sender == prize2Slider {
            prize2Label.text = str
        }
        else if sender == prize3Slider {
            prize3Label.text = str
        }
        calculatePrizeAmount()
    }
    func calculatePrizeAmount() {
        var enteredAmountString = enteredAmount
                   enteredAmountString = String(enteredAmountString.dropLast())
                   enteredAmountString = enteredAmountString.replacingOccurrences(of: ",", with: "")
        if let doubleEnteredPrize = Double(enteredAmountString) {
            
            let firstPrizePercent = Double(Int(prize1Slider.value))
            let secondPrizePercent = Double(Int(prize2Slider.value))
            let thirdPrizePercent = Double(Int(prize3Slider.value))
            
            let firstPrizeAmount =  doubleEnteredPrize * (firstPrizePercent/100.0)
            let secondPrizeAmount = doubleEnteredPrize * (secondPrizePercent/100.0)
            let thirdPrizeAmount = doubleEnteredPrize * (thirdPrizePercent/100.0)
            
            let firstPrizeStr = StringHelpers.convertToPriceStr(fromVal: firstPrizeAmount)
            let secondPrizeStr = StringHelpers.convertToPriceStr(fromVal: secondPrizeAmount)
            let thirdPrizeStr = StringHelpers.convertToPriceStr(fromVal: thirdPrizeAmount)
            
            prizeLable1Amont.text = firstPrizeStr
            prizeLable2Amont.text = secondPrizeStr
            prizeLable3Amont.text = thirdPrizeStr
        }
    }
    func checkForTotalPercentage() -> Bool{

        let totPercent = Int(prize1Slider.value) + Int(prize2Slider.value) + Int(prize3Slider.value)
        print("totPercent",totPercent)
        if totPercent != 100 {
            showErrorAlertView()
            return false
        }
        return true
    }
    //MARK: Custom Alert View
    func showErrorAlertView(){
        if alertView == nil {
            alertView = CustomAlertView(frame: self.view.frame , title: "상금 배분 오류", desc: "상금 배분의 총 합은 100%보다 \n작거나 클 수 없습니다.", btnTitle: "확인")
            alertView?.dismissClicked = {
                self.removeAlertView()
            }
            self.view.addSubview(alertView!)
        }
    }
    
    func removeAlertView() {
        if let view = alertView {
            view.removeFromSuperview()
            alertView = nil
        }
    }   
}