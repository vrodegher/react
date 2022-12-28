import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`}>
      <div className=" bg-slate-50 p-4 mt-4 shadow-sm rounded-sm flex">
        <img
          className="w-12 h-12 rounded-full bg-cover mr-2"
          src={hero}
          alt={name}
        />

        <div>
          <h2 className="font-semibold text-indigo-500">{props.name}</h2>
          <h3 className="font-thin text-indigo-400">{props.animal}</h3>
          <p className="text-gray-800">{props.breed}</p>
        </div>
      </div>
    </Link>
  );
};

export default Pet;
