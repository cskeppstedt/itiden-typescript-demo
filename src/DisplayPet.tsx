import React from "react";

interface DisplayPetProps {
  petName: string;
  petAge?: number;
}

const DisplayPet: React.FunctionComponent<DisplayPetProps> = (props) => (
  <div>
    This is the DisplayPet component
    <p>Pet name: {props.petName}</p>
    <p>Pet age: {props.petAge}</p>
  </div>
);

export default DisplayPet;
