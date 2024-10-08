import { signOut } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./header.css";

export default async function Header() {

    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    console.log(user);

    return (
        <>
            <div className="header">
                <h1>K.AP</h1>{
                    user ? (
                        <>
                            <span>Hello {user.user_metadata.firstName}</span>
                            <form action={signOut}>
                                <button>Çıkış Yap</button>
                            </form>
                        </>
                    )
                        : (
                            <div className="signBtn">
                                <Link href={"/login"}>Giriş Yap</Link>
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