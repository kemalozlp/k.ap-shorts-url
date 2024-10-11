import { signOut } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./header.css";
import Image from "next/image";

export default async function Header() {

    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    console.log(user);

    return (
        <>
            <div className="header">
            <Link href={"/"}>K.AP</Link>{
                    user ? (
                        <>
                            <span>Hoşgeldin {user.user_metadata.firstName}  {user.user_metadata.lastName}</span>
                            <form action={signOut}>
                                <button>Çıkış Yap</button>
                            </form>
                        </>
                    )
                        : (
                            <div className="signBtn">
                                <Link href={"/login"}>Giriş Yap <Image width={25} height={25} src="./signup.svg" /></Link>
                                <Link href={"/signup"}>Kayıt Ol</Link>
                            </div>
                        )
                }
            </div>
        </>
    )
}


{/* <ul className="flex gap-1 items-center">
<li>Anasayfa</li>
<li>Kullanıcılar</li>
<li>Yazılar</li>
{
    user ? (
        <>
            <span>Hello {user.user_metadata.firstName}</span>
            <form action={signOut}>
                <button>Çıkış Yap</button>
            </form>
        </>
    )
        : (
            <Link href="/login">Giriş Yap</Link>
        )
}

</ul> */}