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
      <Background>
        <Heading>Shake it!</Heading>
        <CocktailsOverview
          data={data}
          error={error}
          drinks={drinks}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          handleUpdateFavorites={handleUpdateFavorites}
        />
      </Background>
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
  background-color: #708090;
  color: black;
  padding: 13px 12px;
  margin: 0;
  border-bottom: 8px solid #b9137c;
  font-family: fasthand;
  font-style: italic;
  font-size: 42px;
  font-weight: bold;
`;
const Background = styled.p`
  background-image: url("/drops.jpg");
  background-position: center;
  background-size: cover;
`;
