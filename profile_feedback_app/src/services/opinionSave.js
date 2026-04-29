import { Opinion } from "@/src/domain/opinion";
import { saveOpinion } from "@/src/repositories/opinionRope";

export const submitOpinion = async (data) => {
  const opinion = new Opinion(data); 
  return await saveOpinion(opinion);
};