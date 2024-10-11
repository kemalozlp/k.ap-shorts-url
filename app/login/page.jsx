import { login, signup } from "./action"
import "./login.css";

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <form >
      <label htmlFor="email">Eposta:</label>
      <input id="email" name="email" type="email" required placeholder="E-posta Giriniz" />
      <label htmlFor="password">Şifre:</label>
      <input id="password" name="password" type="password" required placeholder="********" />
      <button formAction={login}>Login</button> 
    </form>
    </div>
  )
}