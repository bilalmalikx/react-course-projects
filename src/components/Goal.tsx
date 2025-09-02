import type { ReactNode } from "react";

interface GoalProps {
  title: string;
  children: ReactNode; // ye har wo cheez ho sakti hai jo andar likhi jaaye
}

export default function Goal({ title, children }: GoalProps) {
  return (
    <article>
      <h1>{title}</h1>
      <div>{children}</div>
    </article>
  );
}
