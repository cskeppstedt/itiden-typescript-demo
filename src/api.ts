import { Pet } from "./types/swagger/model/pet";

export const getPetById = async (petId: number) => {
  const response = await fetch(`https://petstore.swagger.io/v2/pet/${petId}`);
  const body = await response.json();
  return body as Pet;
};
