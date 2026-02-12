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

export async function updateMonthlyStat(id, updates) {
  const { error } = await supabase
    .from("monthly_stats")
    .update(updates)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
