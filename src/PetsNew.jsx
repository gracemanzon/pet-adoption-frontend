export function PetsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePet(params);
    event.target.reset();
  };

  return (
    <div id="pets-new">
      <h2>Add a Pet:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            Pet Name: <input name="name" type="text" />
          </p>
        </div>
        <div>
          <p>
            Image: <input name="image" type="text" />
          </p>
        </div>
        <div>
          <p>
            Age: <input name="age" type="text" />
          </p>
        </div>
        <div>
          <p>
            Breed: <input name="breed" type="text" />
          </p>
        </div>
        <div>
          <p>
            About: <input name="description" type="text" />
          </p>
        </div>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
