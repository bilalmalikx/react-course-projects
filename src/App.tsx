import Goal from "./components/Goal";

export default function App() {
  return (
    <main>
      <Goal title="Learn React" description="Complete basics this week" />
      <Goal title="Learn TypeScript" description="Use TS with React" />
      <Goal title="Build Projects" description="Practice with real-world apps" />
    </main>
  );
}