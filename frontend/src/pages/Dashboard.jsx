import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    useEffect(() => {

        fetchTasks();

    }, []);

    const fetchTasks = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/tasks"
            );

            setTasks(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const createTask = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/tasks",
                {
                    title,
                    description
                }
            );

            setTitle("");
            setDescription("");

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };

    const deleteTask = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/api/tasks/${id}`
            );

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };

    const updateStatus = async (id, status) => {

        try {

            await axios.put(
                `http://localhost:5000/api/tasks/${id}`,
                { status }
            );

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8 text-center">
                    Team Task Manager
                </h1>

                <form
                    onSubmit={createTask}
                    className="bg-white p-6 rounded-lg shadow-md mb-8"
                >

                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <textarea
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                    >
                        Add Task
                    </button>

                </form>

                <div className="grid gap-4">

                    {
                        tasks.map((task) => (

                            <div
                                key={task._id}
                                className="bg-white p-5 rounded-lg shadow"
                            >

                                <h2 className="text-2xl font-semibold">
                                    {task.title}
                                </h2>

                                <p className="text-gray-600 mt-2">
                                    {task.description}
                                </p>

                                <p className="mt-3 font-medium">
                                    Status:
                                    <span className="ml-2 text-blue-600">
                                        {task.status}
                                    </span>
                                </p>

                                <div className="flex gap-3 mt-5">

                                    <button
                                        onClick={() =>
                                            updateStatus(
                                                task._id,
                                                "In Progress"
                                            )
                                        }
                                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                                    >
                                        In Progress
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateStatus(
                                                task._id,
                                                "Completed"
                                            )
                                        }
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                    >
                                        Completed
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteTask(task._id)
                                        }
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Dashboard;