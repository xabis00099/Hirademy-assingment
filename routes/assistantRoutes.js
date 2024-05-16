const express = require('express');
const getAssistant = require('../controllers/getAssistant');
const getAllAssistant = require('../controllers/getAllAssistant');
const addAssistant = require('../controllers/addAssistant');
const updateAssistant = require('../controllers/updateAssistant');
const deleteAssistant = require('../controllers/deleteAssistant');
const router = express.Router();

router.get("/:assistantId", getAssistant);
router.get("/", getAllAssistant);
router.post("/", addAssistant);
router.put("/:assistantId", updateAssistant);
router.delete("/:assistantId", deleteAssistant);

module.exports = router