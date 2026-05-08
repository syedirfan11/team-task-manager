const express = require("express");

const {
    createTask,
    getTasks,
    deleteTask,
    updateTaskStatus
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);

router.get("/", getTasks);

router.delete("/:id", deleteTask);

router.put("/:id", updateTaskStatus);

module.exports = router;