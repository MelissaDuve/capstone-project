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
    <Container>
      <ul>
        {drinks?.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <ListItem key={idDrink}>
            <h2>{strDrink}</h2>
            <Link href={`/cocktailsPreview/${idDrink}`}>
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
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 340px;
  margin-top: 70px;
  margin-bottom: 60px;
`;

const ListItem = styled.li`
  list-style-type: none;
  border-radius: 20px;
  border: 3px solid grey;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 10px;
`;
