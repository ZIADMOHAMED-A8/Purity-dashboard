import { supabase } from "../../../supabaseClient";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
