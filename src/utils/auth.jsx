import { useState } from "react";
import { useToken } from "react-token-auth";

const useAuth = () => {
  const [token, setToken] = useState("");

  const login = async (username, password) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      setToken(data.token);
    }
  };

  const logout = async () => {
    setToken("");
  };

  return { token, login, logout };
};

export default useAuth;
