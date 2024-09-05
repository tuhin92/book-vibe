const BestSeller = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:px-0 px-14">
        <h2 className="text-4xl font-bold">Best Sellers</h2>
        <hr />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card-1  */}
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://famouspersonalitiesofbangladesh.files.wordpress.com/2016/09/csm_muhammed_zafar_iqbal_400px_2127f79b2d.jpg"
            alt="author"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Muhammed Zafar Iqbal
            <div className="badge badge-secondary">1st</div>
          </h2>
          <p className="text-gray-500">Muhammed Zafar Iqbal is a dedicated teacher of Computer Science and Engineering subject. But he is widely popular as a writer and novelist.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Science Fiction</div>
            <div className="badge badge-outline">Children’s Literature</div>
          </div>
        </div>
      </div>
      {/* card-2  */}
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://i.postimg.cc/HxtXJbPD/image.jpg"
            alt="author"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Humayun Ahmed
            <div className="badge badge-secondary">2nd</div>
          </h2>
          <p className="text-gray-500">Novelist, short story writer, playwright, lyricist, screenwriter and filmmaker is Humayun Ahmed.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Short story writer</div>
            <div className="badge badge-outline">Novelist</div>
          </div>
        </div>
      </div>
      {/* card-3  */}
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://i.postimg.cc/NMwxjM5K/image.jpg"
            alt="author"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Rabindranath Tagore
            <div className="badge badge-secondary">3rd</div>
          </h2>
          <p className="text-gray-500">Rabindranath Tagore was out on a tour of the world for twelve times.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Science Fiction</div>
            <div className="badge badge-outline">Children’s Literature</div>
          </div>
        </div>
      </div>

      {/* card-4  */}
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://i.postimg.cc/qBN8Hym1/image.jpg"
            alt="author"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Jibanananda Das
            <div className="badge badge-secondary">4th</div>
          </h2>
          <p className="text-gray-500">Jībanānanda Dāś (Bengali: জীবনানন্দ দাশ, ) (18 February 1899 – 22 October 1954) was a Bengali poet, writer, novelist and essayist.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Science Fiction</div>
            <div className="badge badge-outline">Children’s Literature</div>
          </div>
        </div>
      </div>

      {/* card-5  */}
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://i.postimg.cc/433YbRqW/image.jpg"
            alt="author"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Kazi Nazrul Islam
            <div className="badge badge-secondary">5th</div>
          </h2>
          <p className="text-gray-500">Kazi Nazrul Islam (Bengali: কাজী নজরুল ইসলাম, Bengali pronunciation: [kazi nozrul islam] (listen); 25 May 1899 – 29 August 1976) was a Bengali poet, writer, musician, anti-colonial revolutionary and the national poet of Bangladesh. Popularly known as Nazrul,</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Science Fiction</div>
            <div className="badge badge-outline">Children’s Literature</div>
          </div>
        </div>
      </div>
      {/* card-6  */}
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <img
            src="https://i.postimg.cc/P5PJG0G8/image.jpg"
            alt="author"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Michael Madhusudan Dutt
            <div className="badge badge-secondary">6th</div>
          </h2>
          <p className="text-gray-500">Michael Madhusudan Dutt, or Michael Madhusudan Dutta (Bengali: মাইকেল মধুসূদন দত্ত (Maikel Modhushudôn Dôtto ); 25 January 1824 – 29 June 1873) was a popular 19th-century Bengali poet and dramatist. He was a pioneer of Bengali drama. His famous work Meghnād Bôdh Kāvya, is a tragic epic.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Science Fiction</div>
            <div className="badge badge-outline">Children’s Literature</div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default BestSeller;
