import { supabase } from "../../../supabaseClient";

export async function getNotifications() {
  const { data, error } = await supabase
    .from("notifications ")
    .select("*")

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
