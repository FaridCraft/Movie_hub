"use client";
import "./globals.css";

function Page() {
  const movies = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
      title: "Lilo & Stitch",
      description:
        "Live-action/animated remake that became one of the biggest box-office hits of 2025, grossing over $1 billion worldwide.",
      trailer: "https://youtu.be/VWqJifMMgZE",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c0/Diablo_Immortal_App_Logo.png",
      title: "Diablo",
      description:
        "A pulse-pounding martial-arts heavy action film hailed as one of the best of 2025 by Fandor and the NY Times.",
      trailer: "https://youtu.be/ANKPsCTh0Og",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/38/28_Years_Later_film_poster.jpg",
      title: "28 Years Later",
      description:
        "Danny Boyle’s tense sequel to '28 Days Later,' whose thrilling trailer became the most-watched on YouTube.",
      trailer: "https://youtu.be/mcvLKldPM08",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BZTBhZDEwMjYtYjAzMi00OTVlLTliOWUtOWE4ZmQ2MGEyNTcxXkEyXkFqcGc@._V1_.jpg",
      title: "Nobody 2",
      description:
        "The follow-up to the hit action-comedy featuring Bob Odenkirk’s return as Hutch in a vacation gone wrong.",
      trailer: "https://youtu.be/-5X2pt95cIo",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Superman",
      description:
        "One of the top-grossing blockbusters of 2025, dominating box-office charts.",
      trailer: "https://youtu.be/Ox8ZLF6cGM0",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFVfi2o1hSqUx90KDvLK7I3cA4ny41C8Z7Q&s",
      title: "Jurassic World: Rebirth",
      description:
        "A massive box-office hit and one of the highest-grossing films of 2025.",
      trailer: "https://youtu.be/jan5CFWs9ic",
    },
    {
      image:
        "https://images.moviesanywhere.com/26db65231238c8b9c1961fbb1c2bd461/06cdef23-92d4-468f-aa15-20bc7183ce15.jpg",
      title: "Captain America: Brave New World",
      description:
        "Marvel returns with Sam Wilson confronting a global conspiracy—though reviews were mixed.",
      trailer: "https://youtu.be/1pHDWnXmK7Y",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzkzMzNmZTUtODU3ZS00MmNkLWI2MzMtYzExMWY4ZDNiZjBiXkEyXkFqcGc@._V1_.jpg",
      title: "Alpha",
      description:
        "Upcoming Hindi-language female-led spy action scheduled for late 2025, featuring Alia Bhatt.",
      trailer: "https://youtu.be/uIxnTi4GmCo",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_.jpg",
      title: "Mission: Impossible – Dead Reckoning Part Two",
      description:
        "Tom Cruise returns for the explosive conclusion of the Mission: Impossible saga.",
      trailer: "https://www.youtube.com/watch?v=avz06PDqDbM",
    },

    {
      image:
        "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Oppenheimer",
      description:
        "Christopher Nolan’s gripping biopic of the 'father of the atomic bomb,' a major awards contender.",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    },
    {
      image:
        "https://beam-images.warnermediacdn.com/2024-03/Wonka_BO-L1_1080x1080.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com",
      title: "Wonka",
      description:
        "A whimsical prequel exploring the early adventures of Willy Wonka, blending magic, music, and chocolate.",
      trailer: "https://www.youtube.com/watch?v=otNh9bTjXWg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Haunted_Mansion_%282023%29_poster.jpg/250px-Haunted_Mansion_%282023%29_poster.jpg",
      title: "Haunted Mansion",
      description:
        "A spooky comedy-adventure inspired by the iconic theme park ride, mixing chills with laughs.",
      trailer: "https://www.youtube.com/watch?v=AjLKTz81bj8",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <div className="text-1x5 text-amber-50 flex gap-8 bg-black justify-center">
        <a
          href="/Funny"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Funny
        </a>
        <a
          href="/Action"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Action
        </a>
        <a
          href="/horror"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Horror
        </a>
      </div>

      {/* Card Section */}
      <section className="bg-black py-12 px-6">
        <h2 className="text-3xl font-bold text-red-500 text-center mb-10">
          🎥 Trending Movies
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {movies.map((movie, index) => (
<div
  key={index}
  className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 flex flex-col"
>
  <img
    src={movie.image}
    alt={movie.title}
    className="w-full h-64 object-cover"
  />
  <div className="p-4 flex flex-col flex-grow">
    <h3 className="text-xl font-bold mb-4">{movie.title}</h3>
    <p className="text-sm text-gray-300 flex-grow">{movie.description}</p>
    <a
      href={movie.trailer}
      target="_blank"
      rel="noreferrer"
      className="mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition text-center"
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

export default Page;
