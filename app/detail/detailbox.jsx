"use server"
import "./detail.css";
import { createClient } from "@/utils/supabase/server";



export default async function Detailtext() {
  const supabase = createClient();

  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  return (
    <div className="containerbox">
      <h1>olsana amk</h1>
    </div>
  )
}