import { signUp } from "@/actions/auth"; 
import "./signup.css";
export default function SignUPPage(){ 

    return(
       <div className="signupContainer">
         <form action={signUp} >
            <label htmlFor="name"> Adınız:</label>
            <input type="text" name="firstName" placeholder="Adınız" /> <br />
            <label htmlFor="lastName">Soyadınız:</label>
            <input type="text" name="lastName" placeholder="Soyadınız" /> <br />
            <label htmlFor="email">E-posta Adresiniz</label>
            <input type="email" name="email" placeholder="E-posta Adresiniz" /> <br />
            <label htmlFor="password">Şifreniz:</label>
            <input type="password" name="password" placeholder="********" />
            <button className="signupbtn">Kayıt Ol</button>
        </form>
       </div>
    )
}