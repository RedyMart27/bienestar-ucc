import { Eye, EyeOff } from "lucide-react";

function Input({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  showPassword,
  togglePassword,
  forgotPassword = false,
}) {
  return (
    <div className="mb-7">

      <div className="flex justify-between mb-2">

        <label className="font-semibold text-gray-800">
          {label}
        </label>

        {forgotPassword && (
          <button
            type="button"
            className="text-cyan-600 text-sm hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        )}

      </div>

      <div
        className="
          flex
          items-center
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          px-5
          py-4
          transition
          focus-within:border-cyan-500
          focus-within:ring-2
          focus-within:ring-cyan-200
        "
      >

        {Icon && (
          <Icon
            className="text-gray-400"
            size={22}
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            ml-4
            flex-1
            bg-transparent
            outline-none
          "
        />

        {togglePassword && (
          <button
            type="button"
            onClick={togglePassword}
          >
            {showPassword ? (
              <EyeOff
                size={22}
                className="text-gray-400"
              />
            ) : (
              <Eye
                size={22}
                className="text-gray-400"
              />
            )}
          </button>
        )}

      </div>

    </div>
  );
}

export default Input;