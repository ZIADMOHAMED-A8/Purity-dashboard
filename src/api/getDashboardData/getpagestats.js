import { supabase } from "../../../supabaseClient";

export async function getPageStats() {
  const { data, error } = await supabase
    .from("page_stats")
    .select("*")


  if (error) {
    throw new Error(error.message);
  }

  return data;
}
