import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import StatsSection from "./StatsSection";
import TaskPreview from "./TaskPreview";
import ProfileCard from "./ProfileCard";

export default function App() {
    return (
        <div>
            <Header />

            <main>
                <WelcomeSection />
                <StatsSection />
                <TaskPreview />
                <ProfileCard />
            </main>
        </div>
    );
}