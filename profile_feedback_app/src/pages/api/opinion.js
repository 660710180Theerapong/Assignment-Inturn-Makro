import { submitOpinion } from "@/src/services/opinionSave";

export default async function handleSubmit(req, res) {
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