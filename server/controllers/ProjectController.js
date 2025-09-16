import supabase from "../models/supabase.js";

export const getProjects = async (req, res) => {
  try {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
