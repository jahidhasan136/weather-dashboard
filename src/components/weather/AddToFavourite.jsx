import { useContext, useState } from "react";
import redFavouriteIcon from "../../assets/heart-red.svg";
import favouriteIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, toogleFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;
  // console.log(latitude, longitude, location);
  function handleFavourites() {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toogleFavourite(!isFavourite);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redFavouriteIcon : favouriteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
