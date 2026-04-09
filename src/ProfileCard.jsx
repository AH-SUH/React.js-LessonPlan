// Simple profile section used on the Profile route
export default function ProfileCard({ learningNote }) {
    return (
        <section>
            <h2>Profile Snapshot</h2>
            <p>{learningNote}</p>
        </section>
    );
}