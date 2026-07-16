import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Mail, Lock } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";

import Input from "../common/Input";
import Button from "../common/Button";

function LoginForm({ current }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const demoColors = {
    cyan: "bg-cyan-100 text-cyan-800",
    lime: "bg-lime-100 text-lime-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await api.post("login/", {
        username,
        password,
      });

      login(
        response.data.usuario,
        response.data.access,
        response.data.refresh
      );

      switch (response.data.usuario.rol) {
        case "estudiante":
          navigate("/estudiante", { replace: true });
          break;

        case "administrativo":
          navigate("/admin", { replace: true });
          break;

        case "superadmin":
          navigate("/superadmin", { replace: true });
          break;

        default:
          navigate("/login", { replace: true });
      }
    } catch (err) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("No fue posible iniciar sesión.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">

      <Input
        label="Usuario"
        type="text"
        placeholder="Usuario institucional"
        icon={Mail}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        label="Contraseña"
        type={showPassword ? "text" : "password"}
        placeholder="********"
        icon={Lock}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        togglePassword={() => setShowPassword(!showPassword)}
        forgotPassword
      />

      {error && (
        <div className="mt-4 rounded-xl bg-red-100 border border-red-300 p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="mt-6">
        <Button
          text={loading ? "Iniciando sesión..." : "Iniciar sesión"}
          color={current.button}
          onClick={handleLogin}
          disabled={loading}
        />
      </div>

      <div
        className={`mt-8 rounded-2xl p-5 ${demoColors[current.color]}`}
      >
        <span className="font-bold">
          Demo:
        </span>

        <span className="ml-2">
          Usa tu usuario y contraseña registrados en el sistema.
        </span>

      </div>

    </div>
  );
}

export default LoginForm;