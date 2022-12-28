import Pet from "./Pet";

const Results = ({ pets }) => {
  return pets.lenght === 0 ? (
    <h2>No pets found</h2>
  ) : (
    pets.map((pet) => (
      <Pet
        animal={pet.animal}
        key={pet.id}
        name={pet.name}
        breed={pet.breed}
        images={pet.images}
        location={`${pet.city}, ${pet.state}`}
        id={pet.id}
      />
    ))
  );
};

export default Results;
