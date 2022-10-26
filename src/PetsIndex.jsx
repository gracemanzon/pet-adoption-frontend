export function PetsIndex(props) {
  return (
    <div id="pets-index">
      <h1>Meet the Pets</h1>
      <div className="pets-index">
        {props.pets.map((pet) => (
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
