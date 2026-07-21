function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
}) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-md
        ${padding}
        ${hover ? "hover:shadow-xl transition duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;