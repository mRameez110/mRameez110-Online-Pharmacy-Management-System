const patientModel = require("../models/patientModel");
const userModel = require("../models/userModel");
const { updatePatientService } = require("../services/patientServices");

const getAllPatients = async (req, res, next) => {
  try {
    const patients = await patientModel.find({}).populate("user");
    console.log("see all patients ", patients);
    res.status(200).json({ patients });
  } catch (err) {
    next(err);
  }
};

// --> Get patient

const getPatient = async (req, res, next) => {
  try {
    console.log("get patien run ", req);
    const patientId = req.params.id;
    if (!patientId) th;
    const findUser = await patientModel
      .findOne({
        _id: patientId,
      })
      .populate("user", ["userName", "email", "role"]);

    res.status(200).json({
      message: "Geted Patient Successfully",
      user: findUser,
    });
  } catch (err) {
    next(err);
  }
};

const updatedPatient = async (req, res, next) => {
  const updatedPatient = await updatePatientService(req.params.id, req.body);

  res
    .status(201)
    .json({ message: "User updated successfully", newUser: updatedPatient });
};

module.exports = { getAllPatients, getPatient, updatedPatient };
