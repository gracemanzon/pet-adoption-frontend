import { PetsIndex } from "./PetsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { PetsShow } from "./PetsShow";
import { Modal } from "./Modal";
import { PetsNew } from "./PetsNew";

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

  const handlePetUpdate = (params) => {
    axios.patch("http://localhost:3000/pets/" + currentPet.id + ".json", params).then((response) => {
      const updatedPet = response.data;
      setCurrentPet(updatedPet);
      setPets(
        pets.map((pet) => {
          if (pet.id === updatedPet.id) {
            return updatedPet;
          } else {
            return pet;
          }
        })
      );
    });
  };

  const handlePetDestroy = (pet) => {
    axios.delete("http://localhost:3000/pets/" + pet.id + ".json").then((response) => {
      setPets(pets.filter((p) => p.id !== pet.id));
      handlePetHide();
    });
  };

  useEffect(handlePetsIndex, []);

  return (
    <div>
      <PetsIndex pets={pets} onSelectPet={handlePetShow} />
      <Modal show={isPetsShowVisible} onClose={handlePetHide}>
        <PetsShow pet={currentPet} onUpdatePet={handlePetUpdate} onDestroyPet={handlePetDestroy} />
      </Modal>
    </div>
  );
}
