type TextProps = {
  as?: "p" | "span" | "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export const Text = ({ as: Component = "p", children, className }: TextProps) => {
  return <Component className={className}>{children}</Component>;
};

