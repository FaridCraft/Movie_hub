import React from "react";
import Link from "next/link";

function Funny() {
  const movies = [
    {
      image:
        "https://musicart.xboxlive.com/7/40e42e00-0000-0000-0000-000000000002/504/image.jpg",
      title: "The Conjuring",
      description:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      href: "https://youtu.be/bMgfsdYoEEo",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BZDFhODExOTctNTFkZS00NjE1LWE2MWMtY2Q1ZThhMGY5NjJkXkEyXkFqcGc@._V1_.jpg",
      title: "It",
      description:
        "A group of kids face their worst nightmares when an ancient evil, disguised as a clown, terrorizes their town.",
      href: "https://youtu.be/xKJmEC5ieOk",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/a311d626796e53a03cebd7241088cd74389a7940e10de7bfeabf46f73a80d91d.jpg",
      title: "Insidious",
      description:
        "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
      href: "https://youtu.be/zuZnRUcoWos",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Annabelle_film_poster.jpg",
      title: "Annabelle",
      description:
        "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by cultists.",
      href: "https://youtu.be/paFgQNPGlsg",
    },
    {
      image:
        "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fd%2Fgracenote%2Fd0d1e0f60a30c52503cf417cee32a9aa.jpg",
      title: "Hereditary",
      description:
        "A family unravels dark secrets after the death of their matriarch, facing horrifying forces tied to their ancestry.",
      href: "https://youtu.be/V6wWKNij_1M",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/1373c00c7f0514d192cc8ca3726dd6abbf8bb92a8cb27406ab019a8693935ca3.jpg",
      title: "Sinister",
      description:
        "A true-crime writer discovers disturbing home videos that suggest his new house was once the scene of a brutal murder.",
      href: "https://youtu.be/_kbQAJR9YWQ",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1527875498995-BIYG4KB3JODRRGV61RI1/A+Quiet+Place.jpg",
      title: "A Quiet Place",
      description:
        "A family must live in silence to avoid creatures that hunt by sound.",
      href: "https://youtu.be/WR7cc5t7tv8",
    },
    {
      image:
        "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F9%2Fgracenote%2F9a293b95e36cbdea7ef14ec166466cc0.jpg",
      title: "The Nun",
      description:
        "A priest and a novice investigate a young nun's mysterious death in Romania, uncovering a demonic presence.",
      href: "https://youtu.be/pzD9zGcUNrw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/g5AagVSqqvW_1224tZneJ9UA_4quYewx1fJ_3fpkxG5MxVZCgZrY9auJIZmKqLpWPUN2fA=w240-h480-rw",
      title: "The Texas Chainsaw Massacre",
      description:
        "A group of friends falls victim to a family of cannibals led by the chainsaw-wielding Leatherface.",
      href: "https://youtu.be/VRTFsLfV7ik",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png",
      title: "Us",
      description:
        "A family is terrorized by their doppelgängers during a vacation at their beach house.",
      href: "https://youtu.be/hNCmb-4oXJA",
    },
    {
      image:
        "https://images.justwatch.com/poster/300874609/s718/smile-2022.jpg",
      title: "Smile",
      description:
        "After witnessing a bizarre suicide, a doctor is haunted by terrifying occurrences linked to a mysterious curse.",
      href: "https://youtu.be/BcDK7lkzzsU",
    },
  ];

  return (
       <>
      {/* Button section */}
      <div className="h-14  text-1x5 text-amber-50 flex gap-8 bg-black justify-center">
        <div className="bg-black justify-center flex mb-5 ">
          <Link href="/">
            <button
              className=" bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-red-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-200">
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
              <p className="translate-x-2">Home</p>
            </button>
          </Link>
        </div>

        <a
          href="/Funny"
          // target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Funny
        </a>

        <a
          href="/Action"
          // target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Action
        </a>

        <a
          href="/horror"
          // target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white/20 text-white backdrop-blur-md transition"
        >
          Horror
        </a>
      </div>

      {/* Movie cards */}
      <section className="bg-black py-12 px-6">
        <h2 className="text-3xl font-bold text-red-500 text-center mb-10">
          🎥 Funny Movies
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

export default Funny;
