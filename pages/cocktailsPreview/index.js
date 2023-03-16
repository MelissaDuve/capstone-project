import CocktailsOverview from "@/components/CocktailsOverview";
import Navigation from "@/components/Navigation";
import styled from "styled-components";

export default function CocktailsPreview({
  data,
  error,
  drinks,
  isFavorite,
  onToggleFavorite,
  handleUpdateFavorites,
}) {
  return (
    <div>
      <Heading>🍸App name🍸</Heading>
      <CocktailsOverview
        data={data}
        error={error}
        drinks={drinks}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        handleUpdateFavorites={handleUpdateFavorites}
      />
      <Navigation />
    </div>
  );
}

const Heading = styled.h1`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  background-color: #82be81;
  color: white;
  padding: 18px 12px;
  margin: 0;
`;
