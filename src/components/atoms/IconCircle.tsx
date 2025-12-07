type IconCircleProps = {
  icon: React.ReactNode;
};

export const IconCircle = ({ icon }: IconCircleProps) => {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
      {icon}
    </div>
  );
};

