import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "nav";
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-500";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-white text-sky-700 shadow-sm hover:bg-slate-50 focus-visible:ring-white/80",
  ghost:
    "border border-white/60 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/80",
  nav: "rounded-none bg-white text-sky-500 hover:bg-slate-50 focus-visible:ring-white/80"
};

export const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      type={props.type ?? "button"}
      className={`${baseClass} ${variants[variant]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
};
