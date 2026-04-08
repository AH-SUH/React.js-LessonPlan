export default function TaskPreview({ tasks, toggleTaskComplete }) {
    return (
        <section>
            <h2>Task Preview</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                                marginRight: "10px",
                            }}
                        >
                            {task.title}
                        </span>

                        <button onClick={() => toggleTaskComplete(task.id)}>
                            {task.completed ? "Completed" : "Mark Complete"}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}