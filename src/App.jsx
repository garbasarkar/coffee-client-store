import { useLoaderData } from "react-router-dom";
import "./App.css";
import SingleCoffee from "./AllComponent/SingleCoffee";

function App() {
  const coffees = useLoaderData();
  // console.log(coffees);
  return (
    <>
      <h1 className="text-3xl font-bold text-purple-600">
        All Coffee: {coffees.length}
        <div className="grid grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <SingleCoffee key={coffee._id} coffee={coffee}></SingleCoffee>
          ))}
        </div>
      </h1>
    </>
  );
}

export default App;
