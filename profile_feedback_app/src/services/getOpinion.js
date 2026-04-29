
import {getOpinion} from "@/src/repositories/getOpinion"

export const fetchOpinion = async () => {
  const data = await getOpinion()
  return data;
};