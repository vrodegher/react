import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import useBreedList from "./useBreedList";

const SearchParams = () => {
  const ANIMALS = ["dog", "bird", "cat", "rabbit", "reptile"];
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="bg-slate-300 p-4 rounded-md lg:w-1/2 sm:w-full ">
      <form
        className="flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location" className="block pb-2">
          Location
          <input
            className="pl-1 ml-1 rounded-sm"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal" className="block pb-2">
          Animal
          <select
            className="pl-1 ml-1 rounded-sm"
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed" className="block pb-4">
          Breed
          <select
            className="pl-1 ml-1 rounded-sm"
            id="breed"
            disabled={!breeds.length}
            name="breed"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="w-fit font-semibold text-gray-800 bg-slate-400 shadow-md hover:shadow-sm rounded-md py-1 px-2">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
