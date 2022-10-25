export function PetsShow(props) {
  return (
    <div>
      <h2>{props.pet.name}</h2>
      <img src={props.pet.image} alt="" />
      <p>Age: {props.pet.age}</p>
      <p>Breed: {props.pet.breed}</p>
      <p>About: {props.pet.description}</p>
    </div>
  );
}
