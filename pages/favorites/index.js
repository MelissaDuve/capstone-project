import Navigation from "@/components/Navigation";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";

export default function Favorites({ cocktailsInfo, data }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  const toggleFavorite = (idDrink, isFavorite) => {
    if (isFavorite) {
      setFavorites([...favorites, idDrink]);
    } else {
      setFavorites(favorites.filter((favorite) => favorite !== idDrink));
    }
  };

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
                return (
                  <ListItem key={idDrink}>
                    <FavoriteButton
                      idDrink={idDrink}
                      onToggleFavorite={toggleFavorite}
                    />
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
  position: relative;
  padding-left: 0;
  h3 {
    margin-top: 40px;
  }
`;
