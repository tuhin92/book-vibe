import { NavLink } from "react-router-dom";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
        {/* card container  */}
      <div className="hero h-[650px] bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/VNFtfTQD/pngwing-1.png"
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold">Books to freshen up <br></br> your bookshelf</h1>
            <p className="py-6 text-base lg:text-lg text-gray-500">
            "Books to Freshen Up" offers diverse fiction and non-fiction selections, revitalizing readers' minds with engaging narratives and thought-provoking content.
            </p>
            <ul>
                <li className="btn bg-[#23BE0A] text-sm text-white font-bold">
                    <NavLink to="/listed-books">View The List</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <Books></Books>


    </div>
  );
};

export default Home;
