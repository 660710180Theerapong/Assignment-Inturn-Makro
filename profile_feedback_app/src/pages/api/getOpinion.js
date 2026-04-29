import { fetchOpinion } from "@/src/services/getOpinion";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const opinion = await fetchOpinion();
      res.status(200).json({ success: true, data: opinion });
    } catch (err) {
      console.error("Submit Error:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}