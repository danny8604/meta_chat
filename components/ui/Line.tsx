import clsx from "clsx";

interface LineProps {
  className?: string;
}

const Line = ({ className }: LineProps) => {
  return (
    <div
      className={clsx(
        "w-full border-t",
        className,
        !className && "border-slate-500",
      )}
    ></div>
  );
};

export default Line;
