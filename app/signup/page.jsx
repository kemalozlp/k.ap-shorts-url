import { signUp } from "@/actions/auth"; 
import "./signup.css";
export default function SignUPPage(){ 

    return(
        <form action={signUp} >
            <input type="text" name="firstName" placeholder="Adınız" /> <br />
            <input type="text" name="lastName" placeholder="Soyadınız" /> <br />
            <input type="email" name="email" placeholder="E-posta Adresiniz" /> <br />
            <input type="password" name="password" placeholder="********" />
            <button>Kayıt Ol</button>
        </form>
    )
}