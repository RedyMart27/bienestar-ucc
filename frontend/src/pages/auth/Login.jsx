import LeftPanel from "../../components/auth/LeftPanel";
import LoginCard from "../../components/auth/LoginCard";

function Login() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel />

      <LoginCard />
    </div>
  );
}

export default Login;