import { PetsIndex } from "./PetsIndex";

export function Home() {
  const pets = "this is the pets";
  return (
    <div>
      <h2>Home</h2>
      <PetsIndex pets={pets} />
    </div>
  );
}
