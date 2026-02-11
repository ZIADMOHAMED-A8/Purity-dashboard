import { supabase } from "../../../supabaseClient";

export async function getMembers() {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
