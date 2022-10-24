import { PetsIndex } from "./PetsIndex";
import { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const [pets, setPets] = useState([]);

  const handlePetsIndex = () => {
    axios.get("http://localhost:3000/pets.json").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  };

  useEffect(handlePetsIndex, []);

  return (
    <div>
      <h2>Home</h2>
      <PetsIndex pets={pets} />
    </div>
  );
}
