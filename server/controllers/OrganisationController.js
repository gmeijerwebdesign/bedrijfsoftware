import supabase from "../models/supabase.js";

export const getOrganisations = async (req, res) => {
  try {
    const { data, error } = await supabase.from("organisations").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
