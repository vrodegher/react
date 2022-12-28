import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const results = useQuery(["details", id], fetchPet);
  if (results.isLoading) {
    return <div className="animate-spin h-4 w-4">🌀</div>;
  }
  const pet = results.data.pets[0];
  return (
    <div className="p-8">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
              <div className="relative top-40 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="flex justify-end gap-2 mt-4">
                  <button className=" bg-slate-400 shadow-md hover:shadow-none font-semibold rounded-md py-1 px-2">
                    Yes
                  </button>
                  <button
                    className=" bg-slate-200 shadow-md hover:shadow-none font-semibold rounded-md py-1 px-2"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailErrorBoundary() {
  const errorMessage = "Something went wrong with the detail page.";
  return (
    <ErrorBoundary errorMessage={errorMessage}>
      <Details />
    </ErrorBoundary>
  );
}
