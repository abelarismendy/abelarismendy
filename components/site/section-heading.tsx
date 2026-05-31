import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  id: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, id, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
