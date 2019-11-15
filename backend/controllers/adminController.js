const Schedule = require("../models/scheduleModel");

exports.changeStatus = (req, res, next) => {
  Schedule.find({ id: req.params.id })
    .then(user => {
      user.status = req.status;
      user.save();
      res.send(user);
    })
    .catch(err => {
      console.log(err);
    });
};
