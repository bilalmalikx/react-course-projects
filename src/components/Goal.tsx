interface GoalProps {
  title: string;
  description: string;
}

export default function Goal({ title, description }: GoalProps) {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </article>
  );
}
