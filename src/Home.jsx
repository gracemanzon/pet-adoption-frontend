import { PetsIndex } from "./PetsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { PetsShow } from "./PetsShow";
import { Modal } from "./Modal";

export function Home() {
  const [pets, setPets] = useState([]);
  const [isPetsShowVisible, setIsPetsShowVisible] = useState(false);
  const [currentPet, setCurrentPet] = useState({});

  const handlePetsIndex = () => {
    axios.get("http://localhost:3000/pets.json").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  };

  const handlePetShow = (pet) => {
    console.log("handlePetShow", pet);
    setIsPetsShowVisible(true);
    setCurrentPet(pet);
  };

  const handlePetHide = () => {
    console.log("handlePetHide");
    setIsPetsShowVisible(false);
  };

  useEffect(handlePetsIndex, []);

  return (
    <div>
      <h2>Home</h2>
      <PetsIndex pets={pets} onSelectPet={handlePetShow} />
      <Modal show={isPetsShowVisible} onClose={handlePetHide}>
        <PetsShow pet={currentPet} />
      </Modal>
    </div>
  );
}
