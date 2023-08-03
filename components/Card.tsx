import clsx from "clsx";
///clsx is insteac of using '+' or `${}`
const Card = ({ className, children }:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
