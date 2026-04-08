import { useState } from "react";
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

    const [taskCount, setTaskCount] = useState(3);
    const [completedCount, setCompletedCount] = useState(1);
    const [currentFocus] = useState("React Basics");

    const [previewTasks, setPreviewTasks] = useState([
        "Finish React lesson review",
        "Build dashboard layout",
        "Prepare next commit",
    ]);

    const [newTask, setNewTask] = useState("");

    const [profileNote] = useState(
        "Learning React by building one project step by step instead of isolated exercises."
    );

    function completeTask() {
        if (completedCount < taskCount) {
            setCompletedCount(completedCount + 1);
        }
    }

    function resetProgress() {
        setCompletedCount(0);
    }

    function handleTaskChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();

        if (newTask.trim() === "") {
            return;
        }

        setPreviewTasks([...previewTasks, newTask]);
        setTaskCount(taskCount + 1);
        setNewTask("");
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

                <TaskPreview tasks={previewTasks} />
                <ProfileCard learningNote={profileNote} />
            </main>
        </div>
    );
}