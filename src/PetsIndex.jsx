export function PetsIndex(props) {
  return (
    <div>
      <h2>All the Pets</h2>
      {props.pets.map((pet) => (
        <div key={pet.id} id="pets-index" className="pets-index">
          <img src={pet.image} alt={pet.name} />
          <h3>{pet.name}</h3>
          <p>Age: {pet.age} years</p>
          <p> Breed: {pet.breed}</p>
          <p>About: {pet.description}</p>
        </div>
      ))}
    </div>
  );
}
