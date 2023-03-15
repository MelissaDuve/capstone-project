import CocktailsOverview from "@/components/CocktailsOverview";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

export default function Favorites({
  data,
  onToggleFavorite,
  cocktailsInfo,
  setCocktailsInfo,
  drinks,
}) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  if (localStorage.getItem("favorites")) {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }

  const handleToggleFavorite = (idDrink) => {
    const updatedFavorites = favorites.map((fav) => {
      if (fav.idDrink === idDrink) {
        const updatedFav = { ...fav, isFavorite: !fav.isFavorite };
        return updatedFav;
      }
      return fav;
    });

    const updatedFavorite = updatedFavorites.find(
      (fav) => fav.idDrink === idDrink
    );

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);

    const updatedCocktailsInfo = cocktailsInfo.map((info) => {
      if (info.idDrink === idDrink) {
        return { ...info, isFavorite: updatedFavorite.isFavorite };
      }
      return info;
    });
    setCocktailsInfo(updatedCocktailsInfo);
  };

  return (
    <>
      <Header>
        <h3>Favorite Cocktails</h3>
      </Header>
      <ul>
        {favorites &&
          favorites
            .filter((param) => param)
            .map(({ idDrink, strDrink, strDrinkThumb, isFavorite }) => {
              return (
                <li key={idDrink}>
                  <CocktailsOverview
                    idDrink={idDrink}
                    strDrink={strDrink}
                    onToggleFavorite={handleToggleFavorite}
                    cocktailsInfo={cocktailsInfo}
                    strDrinkThumb={strDrinkThumb}
                    isFavorite={isFavorite}
                  />
                </li>
              );
            })}
      </ul>

      <Navigation />
    </>
  );
}

const Header = styled.h3`
  margin: 0;
  right: 0;
  left: 0;
  display: flex;
  position: fixed;
  background-color: darkgreen;
  justify-content: center;
`;
