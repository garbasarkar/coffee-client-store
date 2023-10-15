const AddCoffee = () => {
  const handleCoffeeAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffees = { name, chef, supplier, taste, category, details, photo };
    console.log(coffees);

    fetch(`http://localhost:5000/user/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffees),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Create coffee! User added sucssesfull!!");
        }
        form.reset();
      });
  };
  return (
    <div className="bg-[#f3f1f1] px-32 py-10 mt-10">
      <form onSubmit={handleCoffeeAdd}>
        <div className="flex gap-6 ">
          <div className="w-1/2">
            <label className="text-lg font-semibold">Coffee</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="text"
              name="name"
              placeholder="Coffee Name"
              id=""
            />
          </div>
          <div className="w-1/2">
            <label className="text-lg font-semibold">Chef</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="text"
              name="chef"
              placeholder="Coffee Chef"
              id=""
            />
          </div>
        </div>
        <div className="flex gap-6 mt-4 ">
          <div className="w-1/2">
            <label className="text-lg font-semibold">Supplier</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="text"
              name="supplier"
              placeholder="Coffee Supplier"
              id=""
            />
          </div>
          <div className="w-1/2">
            <label className="text-lg font-semibold">Taste</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="text"
              name="taste"
              placeholder="Coffee Taste"
              id=""
            />
          </div>
        </div>
        <div className="flex gap-6 mt-4 ">
          <div className="w-1/2">
            <label className="text-lg font-semibold">Category</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="text"
              name="category"
              placeholder="Coffee Category"
              id=""
            />
          </div>
          <div className="w-1/2">
            <label className="text-lg font-semibold">Details</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="text"
              name="details"
              placeholder="Coffee Details"
              id=""
            />
          </div>
        </div>
        <div className=" mt-4">
          <div className="w-full">
            <label className="text-lg font-semibold">Photo</label> <br />
            <input
              className="w-full pl-2 py-2 rounded mt-1"
              type="photoURL"
              name="photo"
              placeholder="Coffee Photo"
              id=""
            />
          </div>
        </div>
        <div className="bg-[#D2B48C] text-center py-2 mt-6">
          <button className="text-lg font-bold ">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
