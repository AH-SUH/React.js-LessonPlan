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

    const [taskCount] = useState(3);
    const [completedCount] = useState(1);
    const [currentFocus] = useState("React Basics");

    const [previewTasks] = useState([
        "Finish React lesson review",
        "Build dashboard layout",
        "Prepare next commit",
    ]);

    const [profileNote] = useState(
        "Learning React by building one project step by step instead of isolated exercises."
    );

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
                <TaskPreview tasks={previewTasks} />
                <ProfileCard learningNote={profileNote} />
            </main>
        </div>
    );
}