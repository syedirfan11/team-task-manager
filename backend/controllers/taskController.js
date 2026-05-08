const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {

    try {

        const { title, description, assignedTo } = req.body;

        const task = await Task.create({
            title,
            description,
            assignedTo
        });

        res.status(201).json({
            message: "Task Created Successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Get All Tasks
exports.getTasks = async (req, res) => {

    try {

        const tasks = await Task.find()
        .populate("assignedTo", "name email");

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Task Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Update Task Status
exports.updateTaskStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        res.status(200).json({
            message: "Task Updated Successfully",
            updatedTask
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};