import React, { useEffect, useState } from "react";
import { getPetById } from "./api";
import { Pet } from "./types/swagger/model/pet";

const DisplayPetFromApi = () => {
  const [pet, setPet] = useState<Pet>();

  useEffect(() => {
    getPetById(2).then((petFromApi) => setPet(petFromApi));
  });

  return (
    <div>
      This is a pet-display component
      <p>Pet name is: {pet?.name}</p>
    </div>
  );
};

export default DisplayPetFromApi;
