import { createClient } from "@/utils/supabase/server";
import ShortUrlForm from "./shortform/form";
import "./page.css"
import Detailtext from "./detail/detailbox";

export default async function Home() {

  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  return (
    <>
      <div className="shortenlinks">
        <h1>Uzun Link mi? Zaman kaybı! </h1>
      </div>
      <ShortUrlForm />
      <Detailtext />
    </>
  );
}
