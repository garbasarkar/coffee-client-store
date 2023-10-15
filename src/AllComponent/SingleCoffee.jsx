import { Link } from "react-router-dom";

const SingleCoffee = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDeleteCoffee = (id) => {
    fetch(`https://coffee-server-module-56.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Are you sure? Delete!");
        }
      });
    // const coffeeDel =
  };
  return (
    <div className="flex  items-center shadow-xl p-5">
      <div>
        <img src={photo} alt="Movie" />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-left ml-10">
          <h2 className="text-lg">{name}</h2>
          <p className="text-lg">{chef}</p>
          <p className="text-lg">{supplier}</p>
          <p className="text-lg">{category}</p>
          <p className="text-lg">{taste}</p>
        </div>
        <div className=" flex flex-col space-y-5">
          <button
            onClick={() => handleDeleteCoffee(_id)}
            className="text-lg font-semibold text-white rounded px-5 py-2 bg-purple-500"
          >
            Delete
          </button>
          <Link to={`/edit/${_id}`}>
            {" "}
            <button className="text-lg font-semibold text-white rounded px-5 py-2 bg-purple-500">
              Edit
            </button>
          </Link>
          <button className="text-lg font-semibold text-white rounded px-5 py-2 bg-purple-500">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
