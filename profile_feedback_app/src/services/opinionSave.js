import { Opinion } from "@/domain/opinion";
import { saveOpinion } from "@/repositories/opinionRepo";

export const submitOpinion = async (data) => {
  const opinion = new Opinion(data); 
  return await saveOpinion(opinion);
};