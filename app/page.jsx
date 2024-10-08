import { createClient } from "@/utils/supabase/server";
import ShortUrlForm from "./shortform/form";

export default async function Home() {

  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Shorten Your Loooooooong Links:) </h1>
      <ShortUrlForm />
    </div>
  );
}
