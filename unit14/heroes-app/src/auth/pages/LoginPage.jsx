import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    console.log("User logged in");

    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      {/* <h1>Login </h1>
      <hr /> */}
      <button className="btn btn-primary" onClick={onLogin}>
        Login!
      </button>
    </>
  );
};
