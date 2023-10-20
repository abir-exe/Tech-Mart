import op from "../../../../public/images/aboutUs/Oneplus.jpg";

const AboutUs = () => {
  return (
  
      
      <div className="hero min-h-screen bg-base-200 rounded-xl ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={op} className="max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
          <div className="lg:ml-2">
          <h2 className="text-3xl "> About US</h2>
            <p className="lg:mb-5 px-5 overflow-hidden">
              TechMart is a One-Stop Tech Shop that offers Tech Enthusiasts
              authentic Smartphones, Gadgets & Accessories from renowned brands
              so they can have first-hand experience with the real thing. We aim
              to achieve the highest customer satisfaction by ensuring top-notch
              service through Multichannel Shopping Stores, Online Store, EMI
              Facility, Exchange Offers, Free Home Delivery, Dedicated Service
              Centers, and many more. We built our business on clients trust
              and  In TechMart, we
              are continuously growing ourselves to meet the challenge of a new
              age and new client base. We know that client satisfaction is a
              never-ending journey. Also, we have a strong dedicated team that
              thrust us towards perfection and quality service.
            </p>
            <h5 className="font-bold mb-3">Our Services:</h5>
            <div className="ml-6">
                <li>Multichannel Shopping Center: Offline and Online. </li>
                <li>Official Website for Easy Navigation and Purchasing. </li>
                <li>Free Home Delivery. </li>
                <li>Nationwide Courier Service. </li>
                <li>Emergency 24 Hour/Same Day Delivery.  </li>
                <li>Pre-Order from Renowned E-Commerce site. </li>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default AboutUs;
