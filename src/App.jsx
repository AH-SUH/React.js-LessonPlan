import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import StatsSection from "./StatsSection";
import TaskPreview from "./TaskPreview";
import ProfileCard from "./ProfileCard";

// Personal Dashboard App
// This project is built step-by-step to apply React concepts lesson by lesson.
export default function App() {
    // Dashboard heading content
    const [dashboardTitle] = useState("Personal Dashboard");
    const [dashboardMessage] = useState(
        "This project will grow step by step as I learn React."
    );

    // Task data stored as objects so each task can be tracked individually
    const [tasks, setTasks] = useState([
        { id: 1, title: "Finish React lesson review", completed: true },
        { id: 2, title: "Build dashboard layout", completed: false },
        { id: 3, title: "Prepare next commit", completed: false },
    ]);

    // Current learning focus shown in the stats section
    const [currentFocus] = useState("React Basics");

    // Controlled input value for the Add Task form
    const [newTask, setNewTask] = useState("");

    // Profile text displayed on the Profile route
    const [profileNote] = useState(
        "Learning React by building one project step by step instead of isolated exercises."
    );

    // Derived values calculated from task state
    const taskCount = tasks.length;
    const completedCount = tasks.filter((task) => task.completed).length;

    // useEffect updates the browser tab title and logs task changes
    useEffect(() => {
        document.title = `Completed ${completedCount} of ${taskCount} tasks`;
        console.log("Task list updated:", tasks);
    }, [tasks, completedCount, taskCount]);

    // Marks the first incomplete task as complete
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

    // Resets all tasks back to incomplete
    function resetProgress() {
        const resetTasks = tasks.map((task) => ({
            ...task,
            completed: false,
        }));

        setTasks(resetTasks);
    }

    // Updates the form input as the user types
    function handleTaskChange(event) {
        setNewTask(event.target.value);
    }

    // Adds a new task to the list when the form is submitted
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

    // Toggles one task between complete and incomplete
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
            {/* Shared app header */}
            <Header title={dashboardTitle} message={dashboardMessage} />

            {/* Navigation links for client-side routing */}
            <nav>
                <Link to="/">Dashboard</Link> | <Link to="/tasks">Tasks</Link> |{" "}
                <Link to="/profile">Profile</Link>
            </nav>

            <Routes>
                {/* Dashboard / home view */}
                <Route
                    path="/"
                    element={
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
                        </main>
                    }
                />

                {/* Tasks view */}
                <Route
                    path="/tasks"
                    element={
                        <main>
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
                        </main>
                    }
                />

                {/* Profile view */}
                <Route
                    path="/profile"
                    element={
                        <main>
                            <ProfileCard learningNote={profileNote} />
                        </main>
                    }
                />
            </Routes>
        </div>
    );
}