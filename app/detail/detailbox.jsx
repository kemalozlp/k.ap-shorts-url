import { createClient } from "@/utils/supabase/server";
import "./detail.css"
import Link from "next/link";

export default async function Links() {

  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('short_urls')
    .select('*')

  console.log(data);
  console.log(userdata);

  return (
    <div className="urlCont">
      {data?.map((x, i) =>
        <div className="urlItem" key={i}>
          <div className="links">
            <p href={x.long_url} >{x.short_url}</p>
            <p>{x.long_url}</p>
          </div>
          <button className="btn">Kopyala</button>
        </div>)}
    </div>
  );
}