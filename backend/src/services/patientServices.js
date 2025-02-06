const patientModel = require("../models/patientModel");
const { BadRequestError } = require("../utils/errorHandlerClass");

const updatePatientService = async (patientId, updateData) => {
  const updatedPatient = await patientModel.findByIdAndUpdate(
    patientId,
    { $set: updateData },
    { new: true }
  );

  if (!updatedPatient) throw new BadRequestError("Patient not found", 400);

  return updatedPatient;
};

module.exports = { updatePatientService };
