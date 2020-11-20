import React from "react";
import "./App.css";
import DisplayPet from "./DisplayPet";
import DisplayPetFromApi from "./DisplayPetFromApi";

function App() {
  return (
    <div>
      <DisplayPet petName="Mister Miyagi" />
      <DisplayPetFromApi />
    </div>
  );
}

export default App;
