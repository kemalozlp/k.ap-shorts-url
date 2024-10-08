"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const defaultUserMetadata = {
    role: "user",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    bio: "",
    birthDate: ""
}

export async function signOut() {
    console.log("buraya geldi");
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    console.log(error);
}

export async function signUp(formData) {
   

    const supabase = createClient();
    const { data : { user }, error } = await supabase.auth.signUp(
        {
            email: formData.get("email"),
            password: formData.get("password"),  
            options: {
                data: {
                    ...defaultUserMetadata,
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName")
                }
            }
        }
    )
    redirect("/")
}