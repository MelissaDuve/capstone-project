import styled from "styled-components";
import React, { useState, useEffect } from "react";

export default function FavoriteButton({
  onToggleFavorite,
  isFavorite,
  idDrink,
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  useEffect(() => {
    localStorage.setItem(idDrink, JSON.stringify(favorite));
  }, [idDrink, favorite]);

  const handleClick = () => {
    const newFavorite = !favorite;
    setFavorite(newFavorite);
    localStorage.setItem(idDrink, JSON.stringify(newFavorite));
    onToggleFavorite(idDrink, newFavorite);
  };
  return (
    <FavoriteWrapper onClick={handleClick}>
      <HeartIcon favorite={favorite} viewBox="0 0 24 24">
        <HeartPath
          favorite={favorite}
          d="M12 21.35L10.55 20.03C5.7 15.6 2 12.44 2 8.5 2 5.42 4.42 3 7.5 3c2.11 0 3.99 1.1 5 2.73C12.51 4.1 14.39 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.94-3.7 6.1-8.55 10.53L12 21.35z"
        />
      </HeartIcon>
    </FavoriteWrapper>
  );
}

const FavoriteWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ favorite }) => (favorite ? "red" : "black")};
`;

const HeartPath = styled.path`
  fill: ${({ favorite }) => (favorite ? "red" : "black")};
`;