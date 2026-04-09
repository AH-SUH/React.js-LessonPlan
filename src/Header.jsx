// Reusable header component for the dashboard title and intro message
export default function Header({ title, message }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{message}</p>
        </header>
    );
}