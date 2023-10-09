import React, { createContext, useContext, useState } from "react";
import { handleClickLogin } from "../utils/loginFetch";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleClickLoginWrapper = async (username, password) => {
    try {
      const token = await handleClickLogin(username, password);
      updateToken(token);
    } catch (error) {
      console.error("Error fetching login", error);
    }
  };
  
  const sendUserInfo = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://automatic-spoon-xjx4xprw5pgf5r7-6969.app.github.dev/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    
    try {
      const data = await response.json();
      const token = data.token;
      updateToken(token);
      if (response.ok) {
        alert("Usuario creado exitosamente");
      } else {
        if (data.error === "El usuario ya existe") {
          alert("El usuario ya existe. Por favor, elija otro nombre de usuario.");
        } else {
          alert("Error al crear el usuario. Por favor, inténtelo de nuevo más tarde.");
        }
      }
    } catch (error) {
      console.error("Error fetching signup", error);
    }
  };
  
  const updateToken = (token) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };
  

  const store = {
    token,
    username,
    password,
    user
  };

  const actions = {
    handleClickLoginWrapper,
    setToken,
    setPassword,
    setUsername,
    setUser,
    sendUserInfo
  };

  return <AppContext.Provider value={{ store, actions }}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;