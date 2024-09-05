const About = () => {
  return (
    <div className="max-w-7xl px-12 md:px-0 mx-auto">
        <h2 className="text-4xl text-center mt-5">About Us</h2>
        <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card-1  */}
      <div className="card w-96 bg-base-100 shadow-xl image-full mt-8 hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2022-12-19/it-support-and-services.jpg"
            alt="Services"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">Services</h2>
          <p className="text-white">Services provide solutions, ranging from professional expertise to tangible products, fulfilling diverse consumer needs.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* card-2  */}
      <div className="card w-96 bg-base-100 shadow-xl image-full mt-8 hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://i.postimg.cc/YCHDdM6f/Membership-no-bkgrd.png"
            alt="Membership"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">Membership</h2>
          <p className="text-white">Membership offers exclusive benefits, privileges, and access tailored to loyal patrons or subscribers.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* card-3  */}
      <div className="card w-96 bg-base-100 shadow-xl image-full mt-8 hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/33/2023/01/goals-1024x576.png"
            alt="Goals"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">Goals</h2>
          <p className="text-white">Goals serve as waypoints, guiding actions and ambitions towards desired achievements and personal growth.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
