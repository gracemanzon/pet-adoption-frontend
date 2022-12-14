import axios from "axios";

export function PetsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePet(params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPet(props.pet);
  };

  return (
    <div>
      <div id="pets-show">
        <h2>{props.pet.name}</h2>
        <img src={props.pet.image} alt="" />
        <p>Age: {props.pet.age}</p>
        <p>Breed: {props.pet.breed}</p>
        <p>About: {props.pet.description}</p>
      </div>

      <div id="pets-update">
        <h2>Update Pet:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              Pet Name: <input defaultValue={props.pet.name} name="name" type="text" />
            </p>
          </div>
          <div>
            <p>
              Image: <input defaultValue={props.pet.image} name="image" type="text" />
            </p>
          </div>
          <div>
            <p>
              Age: <input defaultValue={props.pet.age} name="age" type="text" />
            </p>
          </div>
          <div>
            <p>
              Breed: <input defaultValue={props.pet.breed} name="breed" type="text" />
            </p>
          </div>
          <div>
            <p>
              About: <input defaultValue={props.pet.description} name="description" type="text" />
            </p>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Update Pet
          </button>
        </form>
      </div>
      <div id="pets-delete">
        <button onClick={handleClick} className="btn btn-outline-secondary">
          Delete Pet
        </button>
      </div>
    </div>
  );
}
