import { submitOpinion } from "@/services/opinionService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const opinion = await submitOpinion(req.body);
      res.status(200).json({ success: true, data: opinion });
    } catch (err) {
      console.error("Submit Error:", err);
      res.status(400).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}