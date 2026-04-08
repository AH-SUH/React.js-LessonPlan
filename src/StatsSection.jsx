export default function StatsSection({ taskCount, completedCount, focus }) {
    return (
        <section>
            <h2>Quick Stats</h2>
            <ul>
                <li>Tasks: {taskCount}</li>
                <li>Completed: {completedCount}</li>
                <li>Current Focus: {focus}</li>
            </ul>
        </section>
    );
}