import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import { useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail";

export default function App({ Component, pageProps }) {
  const [favoritesstore, setFavoritesstore] = useLocalStorageState(
    "favorites",
    { defaultValue: [] }
  );
  const [cocktailsInfo, setCocktailsInfo] = useState([]);
  const fetcher = (URL) => fetch(URL).then((response) => response.json());
  const { data, error } = useSWR(URL, fetcher);
  const [favorite, setFavorite] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const drinks = data?.drinks;

  function handleUpdateFavorites(idDrink) {
    console.log(idDrink);
    setFavoritesstore([...favoritesstore, idDrink]);
  }

  const handleToggleFavorite = (idDrink) => {
    setCocktailsInfo((prevSetCocktailsInfo) => {
      const info = prevSetCocktailsInfo.find(
        (element) => element.idDrink === idDrink
      );
      if (info) {
        return prevSetCocktailsInfo.map((info) =>
          info.idDrink === idDrink
            ? { idDrink: info.idDrink, isFavorite: !info.isFavorite }
            : info
        );
      }
      return [...prevSetCocktailsInfo, { idDrink: idDrink, isFavorite: true }];
    });
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        data={data}
        error={error}
        drinks={drinks}
        favorite={favorite}
        onToggleFavorite={handleToggleFavorite}
        cocktailsInfo={cocktailsInfo}
        favoritesstore={favoritesstore}
        setFavoritesstore={setFavoritesstore}
        handleUpdateFavorites={handleUpdateFavorites}
      />
    </>
  );
}
