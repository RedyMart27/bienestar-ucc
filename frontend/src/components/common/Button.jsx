function Button({
  text,
  color,
  type = "submit",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        py-4
        rounded-2xl
        text-lg
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        disabled:opacity-60
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        ${color}
      `}
    >
      {text}
    </button>
  );
}

export default Button;