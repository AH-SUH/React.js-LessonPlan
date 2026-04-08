import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import StatsSection from "./StatsSection";
import TaskPreview from "./TaskPreview";
import ProfileCard from "./ProfileCard";

export default function App() {
    const dashboardTitle = "Personal Dashboard";
    const dashboardMessage = "This project will grow step by step as I learn React.";

    const taskCount = 3;
    const completedCount = 1;
    const currentFocus = "React Basics";

    const previewTasks = [
        "Finish React lesson review",
        "Build dashboard layout",
        "Prepare next commit",
    ];

    const profileNote =
        "Learning React by building one project step by step instead of isolated exercises.";

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