"use server";
import { createClient } from "../../../../../../../utils/supabase/server";

export const resendEmailVerification = async (
  prevState: any,
  formData: FormData
) => {
  const supabase = createClient();

  const { error } = await supabase.auth.resend({
    type: "signup",
    email: "huntdavid175@gmail.com",
    // options:{}
  });

  if (error) {
    console.log(error);
    return { status: error.status, message: error.code };
  }

  return { status: 200, message: "Email sent" };
};
