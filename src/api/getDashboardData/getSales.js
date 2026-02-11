import { supabase } from "../../../supabaseClient";

export async function getMonthlyStats() {
  const { data, error } = await supabase
    .from("monthly_stats")
    .select("*")


  if (error) {
    throw new Error(error.message);
  }

  return data;
}
