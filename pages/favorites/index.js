import CocktailsOverview from "@/components/CocktailsOverview";
import Navigation from "@/components/Navigation";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";

export default function Favorites({ cocktailsInfo, favorite, data }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  const handleToggleFavorite = (idDrink) => {
    const updatedFavorites = favorites.map((fav) => {
      if (fav.idDrink === idDrink) {
        const updatedFav = { ...fav, isFavorite: !fav.isFavorite };
        return updatedFav;
      }
      return fav;
    });
    setFavorites(updatedFavorites);
  };
  console.log("fvorites", data);
  return (
    <>
      <Header>
        <h3>Favorite Cocktails</h3>
      </Header>
      <Container>
        <ul>
          {favorites &&
            data.drinks
              .filter((entry) => {
                return favorites.includes(entry.idDrink);
              })
              .map(({ idDrink, strDrink, strDrinkThumb }) => {
                // .filter((param) => param)
                // .map(({ idDrink, strDrink, strDrinkThumb }) => {
                //   const isFavorite = favorites.find(
                //     (fav) => fav.idDrink === idDrink
                //   )?.isFavorite;
                //   const cocktailInfo = cocktailsInfo.find(
                //     (info) => info.idDrink === idDrink
                //   );
                return (
                  <ListItem key={idDrink}>
                    <CocktailsOverview
                      idDrink={idDrink}
                      strDrink={strDrink}
                      onToggleFavorite={handleToggleFavorite}
                      cocktailsInfo={cocktailsInfo}
                      strDrinkThumb={strDrinkThumb}
                      isFavorite={true}
                      favorites={favorites}
                      favorite={favorite}
                    />
                    <HeartIcon viewBox="0 0 24 24">
                      <HeartPath
                        favorite={favorite}
                        d="M12 21.35L10.55 20.03C5.7 15.6 2 12.44 2 8.5 2 5.42 4.42 3 7.5 3c2.11 0 3.99 1.1 5 2.73C12.51 4.1 14.39 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.94-3.7 6.1-8.55 10.53L12 21.35z"
                      />
                    </HeartIcon>
                    <h3>Cocktail:{strDrink}</h3>
                    <Image
                      src={strDrinkThumb}
                      alt={strDrink}
                      height={100}
                      width={100}
                      style={{
                        borderRadius: "15%",
                        border: "3px solid grey",
                      }}
                    />
                  </ListItem>
                );
              })}
        </ul>
      </Container>
      <Navigation />
    </>
  );
}

const Header = styled.h3`
  display: flex;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 10px;
  background-color: darkgreen;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 340px;
  margin-top: 80px;
  margin-bottom: 60px;
`;

const ListItem = styled.li`
  list-style-type: none;
  border-radius: 20px;
  width: 200px;
  border: 3px solid grey;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 10px;
`;
const HeartPath = styled.path`
  width: 24px;
  height: 24px;
  fill: ${({ favorite }) => (favorite ? "red" : "grey")}; ;
`;

const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ favorite }) => (favorite ? "red" : "grey")};
`;
