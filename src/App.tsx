import Goal from "./components/Goal";

export default function App() {
  return (
    <main>
      <Goal title="Learn React">
        <p>Complete basics this week</p>
      </Goal>

      <Goal title="Learn TypeScript">
        <p>Use TS with React</p>
      </Goal>

      <Goal title="Build Projects">
        <ul>
          <li>Practice small apps</li>
          <li>Work on real-world projects</li>
        </ul>
      </Goal>
    </main>
  );
}
