import axios from "axios";

export function PetsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handlePetCreate(params);
    event.target.reset();
  };

  const handlePetCreate = (params) => {
    axios.post("http://localhost:3000/pets.json", params).then((response) => {
      const newPet = response.data;
      console.log("New Pet Added", newPet);
      window.location.href = "/";
    });
  };

  return (
    <div id="pets-new">
      <div className="card" style={{ width: "32rem" }}>
        <div className="card-body">
          <h2 className="card-title">Add a Pet:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Pet Name:</p>
              <input name="name" type="text" />
            </div>
            <div>
              <p>Image:</p>
              <input name="image" type="text" />
            </div>
            <div>
              <p>Age:</p>
              <input name="age" type="text" />
            </div>
            <div>
              <p>Breed:</p>
              <input name="breed" type="text" />
            </div>
            <div>
              <p>About:</p>
              <input name="description" type="text" />
            </div>
            <button className="btn btn-outline-secondary" type="submit">
              Add Pet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
