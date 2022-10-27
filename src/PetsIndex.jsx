import { useState } from "react";

export function PetsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="pets-index">
      <h1>Meet the Pets</h1>
      <h4>Search by Breed: </h4>
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <div className="pets-index">
        {props.pets
          .filter((pet) => pet.breed.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((pet) => (
            <div className="card custom-card" style={{ width: "28rem" }} key={pet.id}>
              <img src={pet.image} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <button className="btn btn-outline-secondary" onClick={() => props.onSelectPet(pet)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
