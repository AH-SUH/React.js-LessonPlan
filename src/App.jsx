import { useEffect, useState } from "react";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import StatsSection from "./StatsSection";
import TaskPreview from "./TaskPreview";
import ProfileCard from "./ProfileCard";

export default function App() {
    const [dashboardTitle] = useState("Personal Dashboard");
    const [dashboardMessage] = useState(
        "This project will grow step by step as I learn React."
    );

    const [tasks, setTasks] = useState([
        { id: 1, title: "Finish React lesson review", completed: true },
        { id: 2, title: "Build dashboard layout", completed: false },
        { id: 3, title: "Prepare next commit", completed: false },
    ]);

    const [currentFocus] = useState("React Basics");
    const [newTask, setNewTask] = useState("");

    const [profileNote] = useState(
        "Learning React by building one project step by step instead of isolated exercises."
    );

    const taskCount = tasks.length;
    const completedCount = tasks.filter((task) => task.completed).length;

    useEffect(() => {
        document.title = `Completed ${completedCount} of ${taskCount} tasks`;
        console.log("Task list updated:", tasks);
    }, [tasks, completedCount, taskCount]);

    function completeTask() {
        const firstIncompleteTask = tasks.find((task) => !task.completed);

        if (!firstIncompleteTask) return;

        const updatedTasks = tasks.map((task) =>
            task.id === firstIncompleteTask.id
                ? { ...task, completed: true }
                : task
        );

        setTasks(updatedTasks);
    }

    function resetProgress() {
        const resetTasks = tasks.map((task) => ({
            ...task,
            completed: false,
        }));

        setTasks(resetTasks);
    }

    function handleTaskChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();

        if (newTask.trim() === "") {
            return;
        }

        const taskToAdd = {
            id: Date.now(),
            title: newTask,
            completed: false,
        };

        setTasks([...tasks, taskToAdd]);
        setNewTask("");
    }

    function toggleTaskComplete(taskId) {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        );

        setTasks(updatedTasks);
    }

    return (
        <div>
            <Header title={dashboardTitle} message={dashboardMessage} />

            <main>
                <WelcomeSection />

                <StatsSection
                    taskCount={taskCount}
                    completedCount={completedCount}
                    focus={currentFocus}
                />

                <section>
                    <h2>Progress Controls</h2>
                    <button onClick={completeTask}>Complete a Task</button>
                    <button onClick={resetProgress}>Reset Progress</button>
                </section>

                <section>
                    <h2>Add a New Task</h2>
                    <form onSubmit={addTask}>
                        <input
                            type="text"
                            value={newTask}
                            onChange={handleTaskChange}
                            placeholder="Enter a new task"
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </section>

                <TaskPreview
                    tasks={tasks}
                    toggleTaskComplete={toggleTaskComplete}
                />

                <ProfileCard learningNote={profileNote} />
            </main>
        </div>
    );
}