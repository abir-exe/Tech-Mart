import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    // const rating = form.rat.value;
    // const radio = form.rad.value

    // console.log(name, email, password)

    const myData = {
      name,
      brandName,
      image,
      price,
      description,
      // rating,
      // radio,
    };
    console.log(myData);

    // for server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          'Product Added',
          'Successfully added',
          'success'
        )
      });
  };

  return (
    <div className="w-3/6 mx-auto h-full">
      <h2 className="text-3xl text-center mt-10 mb-5">Add Product</h2>
      <form
        onSubmit={handleAddProduct}
        className="card-body mb-10 border bg-[#f6f8fa]"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
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
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* product type  */}
        <h3 className="text-xl">Product Type</h3>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Phone</span>
            <input type="radio" name=" rad" className="radio  :bg-blue-500" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Computer</span>
            <input type="radio" name=" rad" className="radio  :bg-blue-500" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Headphone</span>
            <input type="radio" name=" rad" className="radio  :bg-blue-500" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Accessories</span>
            <input type="radio" name=" rad" className="radio  :bg-blue-500" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
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
            type="text"
            name="description"
            placeholder="Short Description"
            className="input input-bordered"
            required
          />
        </div>
        {/* rating  */}
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <div className="rating space-x-2">
          <input type="radio" name="rat" className="mask mask-star" />
          <input type="radio" name="rat" className="mask mask-star" />
          <input type="radio" name="rat" className="mask mask-star" />
          <input type="radio" name="rat" className="mask mask-star" />
          <input type="radio" name="rat" className="mask mask-star" />
        </div>

        <div className="form-control mt-6">
          <button className="btn glass outline">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
