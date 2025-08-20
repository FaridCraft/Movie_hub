import React from "react";
import Link from "next/link";

function Funny() {
  const movies = [
    {
      image:
        "https://images.justwatch.com/poster/304195811/s718/john-wick-chapter-4.jpg",
      title: "John Wick: Chapter 4",
      description:
        "John Wick uncovers a path to defeating the High Table, but must face powerful enemies across the globe.",
      href: "https://youtu.be/qEVUtrk8_B4",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_.jpg",
      title: "Mission: Impossible – Dead Reckoning Part One",
      description:
        "Ethan Hunt and his IMF team race against time to stop a deadly weapon from falling into the wrong hands.",
      href: "https://youtu.be/2m1drlOZSDw",
    },
    {
      image:
        "https://cdn.moviefone.com/image-assets/385687/fiVW06jE7z9YnO4trhaMEdclSiC.jpg?d=360x540&q=30",
      title: "Fast X",
      description:
        "Dom Toretto and his family face their most dangerous enemy yet: revenge from the past.",
      href: "https://youtu.be/32RAq6JzY-w",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg",
      title: "Extraction 2",
      description:
        "Tyler Rake returns for another deadly mission to rescue a family from a ruthless gangster.",
      href: "https://youtu.be/Y274jZs5s7s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5lj_D0Q5ygMBVUUwmdC3H7vcsig2hNTc-A&s",
      title: "Black Panther: Wakanda Forever",
      description:
        "The people of Wakanda fight to protect their nation from intervening world powers after King T’Challa’s death.",
      href: "https://youtu.be/_Z3QKkl1WyM",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "The Batman",
      description:
        "Batman uncovers corruption in Gotham while pursuing the Riddler, a serial killer targeting the city's elite.",
      href: "https://youtu.be/mqqft2x_Aa4",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3toVkn0qWKZUl36Ixa0gEMsuTYAbkwD3kHA&s",
      title: "Avengers: Infinity War",
      description:
        "Earth’s mightiest heroes unite to stop Thanos from collecting all Infinity Stones.",
      href: "https://youtu.be/6ZfuNTqbHE8",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPIIiUly3haHkVbpDQI7X8D5Y7W43RxIYrA&s",
      title: "Mad Max: Fury Road",
      description:
        "In a desert wasteland, Max teams up with Furiosa to escape a tyrant’s rule and his army.",
      href: "https://youtu.be/hEJnMQG9ev8",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNmJlZGIzMjEtZWE0NS00NTAxLWIyNGItNjYzYzhjMmI3ZWVmXkEyXkFqcGc@._V1_.jpg",
      title: "Gladiator 2",
      description:
        "A betrayed Roman general fights his way through the arena to seek vengeance against the corrupt emperor.",
      href: "https://youtu.be/owK1qxDselE",
    },
  ];

  return (
    <>
      {/* Navigation buttons */}
      <div className="flex flex-wrap justify-center gap-4 bg-black py-4">
        {/* Home Button */}
        <div className="flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
          <Link href="/">
            <button
              className="bg-white text-black font-semibold text-lg sm:text-xl w-full sm:w-48 h-14 rounded-2xl relative group flex items-center justify-center overflow-hidden"
              type="button"
            >
              <div className="absolute left-1 top-[4px] h-12 w-1/4 sm:w-12 flex items-center justify-center bg-red-600 rounded-xl group-hover:w-[calc(100%-8px)] transition-all duration-200 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
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
              <p className="ml-4">Home</p>
            </button>
          </Link>
        </div>

        {/* Other Links */}
        <a
          href="/Funny"
          rel="noreferrer"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white text-center backdrop-blur-md transition"
        >
          Funny
        </a>
        <a
          href="/Action"
          rel="noreferrer"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white text-center backdrop-blur-md transition"
        >
          Action
        </a>
        <a
          href="/horror"
          rel="noreferrer"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white text-center backdrop-blur-md transition"
        >
          Horror
        </a>
      </div>

      {/* Movies section */}
      <section className="bg-black py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 text-center mb-8 sm:mb-10">
          🎥 Action Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                  href={movie.href}
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
