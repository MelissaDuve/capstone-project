import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import FavoriteButton from "../FavoriteButton";

export default function CocktailsOverview({
  idDrink,
  onToggleFavorite,
  cocktailsInfo,
  drinks,
  handleUpdateFavorites,
  favoritesstore,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const info = cocktailsInfo?.find((element) => element.idDrink === idDrink);
  useEffect(() => {
    if (info) {
      setIsFavorite(info.isFavorite);
    }
  }, [info]);

  return (
    <>
      <StyledIntro>
        <p>Get inspired with our most popular cocktails: </p>
      </StyledIntro>
      <Container>
        {drinks?.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <ListItem key={idDrink}>
            <Link href={`/cocktailsPreview/${idDrink}`}>
              <Image
                src={strDrinkThumb}
                alt={strDrink}
                height={95}
                width={95}
                style={{
                  borderRadius: "15%",
                  border: "3px solid grey",
                }}
              />
              <h5>{strDrink}</h5>
            </Link>
            <FavoriteButton
              isFavorite={isFavorite}
              idDrink={idDrink}
              onToggleFavorite={onToggleFavorite}
              cocktailsInfo={cocktailsInfo}
              onUpdateFavorites={handleUpdateFavorites}
              favoritesstore={favoritesstore}
            />
          </ListItem>
        ))}
      </Container>
    </>
  );
}

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 75px;
  padding-left: 0;
  min-height: 100vh;
`;

const ListItem = styled.li`
  display: inline-block;
  width: 40%;
  height: 180px;
  list-style-type: none;
  border-radius: 20px;
  border: 3px solid grey;
  text-align: center;
  padding: 10px;
  margin: 10px;
  background-color: rgba(140, 153, 166, 0.6);
  h5 {
    font-size: 0.9rem;
    margin: 4px 0;
    color: black;
  }
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  &:hover {
    cursor: pointer;
    background-color: rgba(211, 217, 222, 0.8);
    color: black;
    font-weight: bold;
    border: 1px solid grey;
  }
`;
const StyledIntro = styled.p`
  padding: 80px;
  padding-left: 34px;
  padding-bottom: 0px;
  height: 10px;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  color: darkgrey;
`;
