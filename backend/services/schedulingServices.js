var schedulingModel = require('../models/scheduleModel')
var cloud = require('../config/cloudinaryConfig');


var createSchedule = async function (scheduleData, scheduleFile) {
    var imageDetails;

    await cloud.uploads(scheduleFile.path).then((result) => {
        imageDetails = {
            imageName: scheduleFile.originalname,
            cloudImage: result.url,
            imageId: result.id
        }
        console.log(imageDetails)
    })

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

            databaseImage: "http://skada.herokuapp.com/" + scheduleFile.path,
            cloudImage: imageDetails.cloudImage,
            imageId: imageDetails.imageId

        }
    );

    console.log(scheduleFile.path)
    return newSchedule.save();
}

var getSchedule = function (scheduleQuery) {
    return schedulingModel.find({ _id: scheduleQuery.scheduleId })
}

var getAllSchedules = function () {
    return schedulingModel.find({ sendersId: scheduleQuery.sendersId })
}

var deleteSchedule = function () {
    return schedulingModel.deleteOne({ _id: scheduleQuery.scheduleId })
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