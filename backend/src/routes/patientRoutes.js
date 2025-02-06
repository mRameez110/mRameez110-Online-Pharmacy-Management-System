const express = require("express");
const {
  getAllPatients,
  getPatient,
  updatedPatient,
} = require("../controllers/patientcontroller");
const authMiddleware = require("../middlwares/authMiddleware");
require("../controllers/patientcontroller");

const router = express.Router();

//router.post("/", createPatient); // can by Admin, Pharmacist

router.get("/", authMiddleware, getAllPatients); // pharmacist and Admin
router.get("/:id", getPatient); // by patient(own), pharmacist and Admin
router.put("/;id", updatedPatient); // by patient(own), pharmacist and Admin
// router.delete("/;id", deletePatient); // by patient(own), pharmacist and Admin

module.exports = router;
