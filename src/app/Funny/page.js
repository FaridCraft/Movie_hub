import React from "react";
import Link from "next/link";

function Funny() {
  const movies = [
    {
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      title: "The Hangover",
      description:
        "Three friends wake up after a wild night in Vegas with no memory... and no groom.",
      url: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
    },
    {
      image: "dumb.jpg",
      title: "Dumb and Dumber",
      description:
        "Two clueless friends take a road trip full of ridiculous adventures.",
      url: "https://www.youtube.com/watch?v=l13yPhimE3o",
    },
    {
      image: "super.jpg",
      title: "Superbad",
      description:
        "Two high schoolers go on a hilarious quest for the ultimate party night.",
      url: "https://www.youtube.com/watch?v=4eaZ_48ZYog",
    },
    {
      image: "21.jpg",
      title: "21 Jump Street",
      description:
        "Two immature cops go undercover in a high school with chaotic results.",
      url: "https://www.youtube.com/watch?v=RLoKtb4c4W0",
    },
    {
      image: "bean.jpg",
      title: "Mr. Bean's Holiday",
      description:
        "Mr. Bean wins a trip to France... and accidentally turns it into pure chaos.",
      url: "https://www.youtube.com/watch?v=VtW-K8USYlA",
    },
    {
      image: "stepbrother.jpg",
      title: "Step Brothers",
      description:
        "Two grown men become stepbrothers and start the most childish rivalry ever.",
      url: "https://www.youtube.com/watch?v=CewglxElBK0",
    },
    {
      image: "centerlmovie.jpg",
      title: "Central Intelligence",
      description:
        "A mild-mannered accountant gets caught up in international espionage with his wild old classmate.",
      url: "https://www.youtube.com/watch?v=MxEw3elSJ8M",
    },
    {
      image: "johnnymovie.jpg",
      title: "Johnny English",
      description:
        "A clumsy secret agent tries to save the world with laughably bad spy skills.",
      url: "https://www.youtube.com/watch?v=UFBZ_uAbxS0",
    },
  ];

  return (
    <>
      {/* Navigation buttons */}
      <div className="h-14  text-1x5 text-amber-50 flex gap-8 bg-black justify-center">
        <div className="bg-black justify-center flex mb-5 ">
          <Link href="/">
            <button
              className="bg-white text-black font-semibold text-lg sm:text-xl w-32 sm:w-48 h-12 sm:h-14 rounded-2xl relative group"
              type="button"
            >
              <div className="bg-red-600 rounded-xl h-10 sm:h-12 w-1/4 sm:w-1/4 flex items-center justify-center absolute left-1 top-1 sm:top-[4px] group-hover:w-[184px] z-10 duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="20px"
                  width="20px"
                  className="sm:h-6 sm:w-6"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  />
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="translate-x-1 sm:translate-x-2">Home</p>
            </button>
          </Link>
        </div>

        <a
          href="/Funny"
          className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Funny
        </a>
        <a
          href="/Action"
          className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Action
        </a>
        <a
          href="/horror"
          className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Horror
        </a>
      </div>

      {/* Movie cards */}
      <section className="bg-black py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 text-center mb-8 sm:mb-10">
          🎥 Funny Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 flex flex-col"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                  {movie.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 flex-grow">
                  {movie.description}
                </p>
                <a
                  href={movie.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-600 rounded-lg hover:bg-red-700 transition text-center text-sm sm:text-base"
                >
                  ▶ Watch Trailer
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Funny;
