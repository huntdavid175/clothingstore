"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../../../../utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/seller/admin");
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const signUpData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        username: formData.get("username") as string,
        avatar_url: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        website: "https://clothingstore-amber.vercel.app",
        full_name: formData.get("username") as string,
      },
    },
  };

  // console.log(data);
  const { data, error } = await supabase.auth.signUp(signUpData);

  if (error) {
    console.log(error);
    // redirect("/auth/confirm-email");
    return { status: error.status, message: error.code };
  }

  console.log("signup success :", data.user);

  revalidatePath("/seller", "layout");
  redirect("/seller/auth/confirm-email");
}

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/seller", "layout");
  redirect("/seller/auth");
}
