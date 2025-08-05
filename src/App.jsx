import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Gig from "./components/Gig";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LandingBody from "./components/LandingBody";

function App() {
  
  const gigData = [
    {
      id: 1,
      bandName: "Oasis",
      imgSrc: "https://www.rollingstone.com/wp-content/uploads/2022/08/oasis-be-here-now.jpg?w=1581&h=1054&crop=1",
      description: "Blokes from Manchester",
      timeDate: "9pm, 08 August 2025",
      location: "MEN"
    },
    {
      id: 2,
      bandName: "Blur",
      imgSrc: "https://www.nme.com/wp-content/uploads/2023/07/Blur-Header-image.jpg",
      description: "Blokes from London",
      timeDate: "9pm, 15 August 2025",
      location: "O2 Arena"
    },
    {
      id: 3,
      bandName: "Pulp",
      imgSrc: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/8894/live/0d5ec400-1604-11f0-b1b3-7358f8d35a35.jpg",
      description: "People from Sheffield",
      timeDate: "10pm, 30 August 2025",
      location: "Sheffield Arena"
    },
    {
      id: 4,
      bandName: "Radiohead",
      imgSrc: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg",
      description: "Blokes from Abingdon",
      timeDate: "10pm, 22 August 2025",
      location: "Oxford Arena"
    },
  ]
  
  const [favourites, setFavourites] = useState([]);

  const handleClick = useCallback((id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }, []);

  const sortedGigs = useMemo(() => {
    return [...gigData].sort((a, b) => {
      const aFav = favourites.includes(a.id);
      const bFav = favourites.includes(b.id);
      if (aFav === bFav) return 0;
      return aFav ? -1 : 1;
    });
  }, [gigData, favourites]);

  return (
    <>
      <Navbar />
      <Hero />
      <h2>Featured Gigs</h2>
      <div className="gigs-container">
        {sortedGigs.map((gig) => (
          <Gig
            key={gig.id}
            gig={gig}
            isFavourite={favourites.includes(gig.id)}
            handleClick={() => handleClick(gig.id)}
          />
        ))}
      </div>
      <LandingBody />
      <Footer />
    </>
  );
}

export default App;
