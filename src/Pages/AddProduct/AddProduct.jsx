const AddProduct = () => {
  return (
    <div className="w-3/6 mx-auto h-full">
      <h2 className="text-3xl text-center mt-10 mb-5">Add Product</h2>
      <form className="card-body mb-10 border bg-[#f6f8fa]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
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
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Computer</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Headphone</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Accessories</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
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
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>

        <div className="form-control mt-6">
          <button className="btn glass outline">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
