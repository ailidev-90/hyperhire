type RolePillProps = {
  label: string;
  active?: boolean;
};

export const RolePill = ({ label, active }: RolePillProps) => {
  return (
    <button
      className={`flex min-w-[120px] items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition-colors ${
        active
          ? "bg-white text-sky-600 shadow-sm"
          : "bg-white/10 text-white/90 hover:bg-white/15"
      }`}
    >
      <span>{label}</span>
    </button>
  );
};

