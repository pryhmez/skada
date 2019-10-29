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

var getSchedule = function (scheduleQuery) {
    return schedulingModel.find({_id: scheduleQuery.scheduleId})
}

var getAllSchedules = function () {
    return schedulingModel.find({sendersId: scheduleQuery.sendersId})
}

var deleteSchedule = function () {

}

var updateSchedule = function () {

}


module.exports.createSchedule = createSchedule;

module.exports = {
   createSchedule,
   getSchedule,
   getAllSchedules,
   deleteSchedule,
   updateSchedule
}