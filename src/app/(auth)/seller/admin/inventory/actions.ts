"use server";

import { createClient } from "../../../../../../utils/supabase/server";

const getUser = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return data.user;
};

export const createProduct = async (prevState: any, formData: FormData) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("products").insert({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: formData.get("price") as string,
    // seller_id: (await getUser())?.id,
    stock_quantity: formData.get("quantity") as string,
    status: false,
    // category: formData.get("category") as string,
  });

  if (error) {
    console.log(error);
    return { error: error.code, message: "Something went wrong" };
  }

  console.log(data);

  return { status: 200, message: "Your product has been created" };
};
