var schedulingModel = require('../models/scheduleModel')



var createSchedule = function (scheduleData) {

    var newSchedule = new schedulingModel(
        {
            pickUpPoint: scheduleData.pickUpPoint,
            deliveryPoint: scheduleData.deliveryPoint,
            pickUpTime: scheduleData.pickUpTime,
            pickUpDate: scheduleData.pickUpDate,
            natureOfGood: scheduleData.natureOfGood,
            quantity: scheduleData.quantity,
            goodsType: scheduleData.goodsType,
            goodsDescription: scheduleData.goodsDescription,


            recieversName: scheduleData.recieversName,
            recieversEmail: scheduleData.recieversEmail,
            recieversPhone: scheduleData.recieversPhone,
            timeOfOrder: scheduleData.timeOfOrder,


            sendersId: scheduleData.sendersId,
            sendersName: scheduleData.sendersName,
            sendersEmail: scheduleData.sendersEmail,
            sendersPhone: scheduleData.sendersPhone,

        }
    );
    return newSchedule.save();
}


module.exports.createSchedule = createSchedule;