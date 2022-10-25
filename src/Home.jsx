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

  const handlePetCreate = (params) => {
    axios.post("http://localhost:3000/pets.json", params).then((response) => {
      const newPet = response.data;
      setPets([...pets, newPet]);
    });
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

  useEffect(handlePetsIndex, []);

  return (
    <div>
      <h2>Home</h2>
      <PetsNew onCreatePet={handlePetCreate} />
      <PetsIndex pets={pets} onSelectPet={handlePetShow} />
      <Modal show={isPetsShowVisible} onClose={handlePetHide}>
        <PetsShow pet={currentPet} onUpdatePet={handlePetUpdate} />
      </Modal>
    </div>
  );
}
