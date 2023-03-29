import Navigation from "@/components/Navigation";
import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

export default function Favorites({ data, favoritesstore, setFavoritesstore }) {
  const toggleFavorite = (idDrink, isFavorite) => {
    if (isFavorite) {
      setFavoritesstore([...favoritesstore, idDrink]);
    } else {
      setFavoritesstore(
        favoritesstore.filter((favorite) => favorite !== idDrink)
      );
    }
  };

  return (
    <>
      <Background>
        <Header>
          <h3>Favorite Cocktails</h3>
        </Header>
        <Container>
          <ul>
            {favoritesstore &&
              data.drinks
                .filter((entry) => {
                  return favoritesstore.includes(entry.idDrink);
                })
                .map(({ idDrink, strDrink, strDrinkThumb }) => {
                  return (
                    <ListItem key={idDrink}>
                      <FavoriteButton
                        idDrink={idDrink}
                        onToggleFavorite={toggleFavorite}
                        isFavoriteNew={favoritesstore.includes(idDrink)}
                      />
                      <Link href={`/cocktailsPreview/${idDrink}`}>
                        <h3>{strDrink}</h3>
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
                      </Link>
                    </ListItem>
                  );
                })}
          </ul>
        </Container>
        <Navigation />
      </Background>
    </>
  );
}

const Background = styled.div`
  background-image: url("drops.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  font-size: 20px;
  background-color: #708090;
  font-weight: bold;
  border-bottom: 8px solid #b9137c;
  justify-content: center;

  z-index: 5;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 340px;
  margin-top: 80px;
  margin-bottom: 70px;
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
  padding: 10px;
  text-decoration: underline;
  background-color: rgba(140, 153, 166, 0.7);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  &:hover {
    cursor: pointer;
    background-color: rgba(211, 217, 222, 0.8);
    color: black;
    font-weight: bold;
    border: 1px solid grey;
  }
  h3 {
    margin-top: 10px;
    color: black;
  }
`;
