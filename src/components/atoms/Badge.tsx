type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const baseClass =
  "inline-flex items-center rounded-lg px-3 py-1.5 text-base font-black";

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  primary: "bg-white text-sky-600 shadow-sm",
  secondary: "bg-emerald-100 text-emerald-700",
  outline: "lg:bg-white bg-[#8BC4FF] text-[#40E2E8] lg:text-[#40E2E8] text-white"
};

export const Badge = ({ children, variant = "primary", className }: BadgeProps) => {
  return (
    <div className="relative inline-block">
      <span className={`${baseClass} ${variants[variant]} ${className ?? ""}`.trim()}>
        {children}
      </span>
      {/* Triangle pointer */}
      <div className="absolute left-6 lg:top-full top-[63%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] lg:border-t-white border-t-[#8BC4FF]"></div>
    </div>
  );
};

