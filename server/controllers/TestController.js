import supabase from "../models/supabase.js";

export const getTest = async (req, res) => {
  try {
    const { data, error } = await supabase.from("test").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
