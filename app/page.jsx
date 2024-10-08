import { createClient } from "@/utils/supabase/server";
import ShortUrlForm from "./shortform/form";
import "./page.css"

export default async function Home() {

  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  return (
    <>
      <div className="shortenlinks">
        <h1>Extend Life Shorteeeeeeen Link :) </h1>
      </div>
      <ShortUrlForm />
    </>
  );
}
