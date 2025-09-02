// import type { ReactNode } from "react";

// interface GoalProps {
//   title: string;
//   children: ReactNode; // ye har wo cheez ho sakti hai jo andar likhi jaaye
// }

// export default function Goal({ title, children }: GoalProps) {
//   return (
//     <article>
//       <h1>{title}</h1>
//       <div>{children}</div>
//     </article>
//   );
// }
import type { PropsWithChildren } from "react";

interface GoalProps {
  title: string;
}

// PropsWithChildren GoalProps me children: ReactNode automatically add kar dega
type GoalPropsWithChildren = PropsWithChildren<GoalProps>;

export default function Goal({ title, children }: GoalPropsWithChildren) {
  return (
    <article>
      <h1>{title}</h1>
      <div>{children}</div>
    </article>
  );
}
