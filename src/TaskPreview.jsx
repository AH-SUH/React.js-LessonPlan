export default function TaskPreview({ tasks }) {
    return (
        <section>
            <h2>Task Preview</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </section>
    );
}