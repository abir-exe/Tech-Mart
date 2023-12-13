import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateData = () => {
  const singleData = useLoaderData();
  console.log(singleData);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const category = form.category.value;
    const rating = form.rating.value;

    // console.log(name, email, password)

    const mySingleData = {
      name,
      brandName,
      image,
      price,
      description,
      category,
      rating,
    };
    console.log(mySingleData);

    fetch(`https://techmartfinall.vercel.app/users/${singleData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mySingleData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Product Updated", "Successfully Updated", "success");
        }
      });
  };

  return (
    <div className="w-3/6 mx-auto h-full">
      <h2 className="text-3xl text-center mt-10 mb-5">Add Product</h2>
      <form
        onSubmit={handleUpdate}
        className="card-body mb-10 border bg-[#f6f8fa]"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            defaultValue={singleData?.name}
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input
            defaultValue={singleData?.brandName}
            type="text"
            name="brandName"
            placeholder="Brand Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            defaultValue={singleData?.image}
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* product type  */}
        <div className="form-control">
          {/* categories */}
          <label>Choose a category:</label>
          <select name="category" defaultChecked={singleData?.category}>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="headphone">Headphone</option>
            <option value="console">Gaming Console</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            defaultValue={singleData?.price}
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input
            defaultValue={singleData?.description}
            type="text"
            name="description"
            placeholder="Short Description"
            className="input input-bordered"
            required
          />
        </div>
        {/* rating  */}
        {/* rating  */}
        <div className="form-control">
          {/* categories */}
          <label>Rating</label>
  <select name="rating">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    
  </select>
  </div>

        <div className="form-control mt-6">
          <button className="btn glass outline">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateData;
