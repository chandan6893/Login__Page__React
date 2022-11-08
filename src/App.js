import "./styles.css";
import { LoginPage } from "./LoginPage";
import { WelcomePage } from "./WelcomePage";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState(true);
  return <div>{login ? <WelcomePage /> : <LoginPage />}</div>;
}
