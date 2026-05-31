import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  variant?: "primary" | "secondary" | "quiet";
};

export function ButtonLink({
  children,
  className,
  icon,
  iconPosition = "start",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn("button-link", `button-link--${variant}`, className)} {...props}>
      {iconPosition === "start" ? icon : null}
      <span>{children}</span>
      {iconPosition === "end" ? icon : null}
    </a>
  );
}
