import CocktailsOverview from "@/components/CocktailsOverview";
import Navigation from "@/components/Navigation";
import styled from "styled-components";

export default function CocktailsPreview({ data, error, drinks }) {
  return (
    <div>
      <Heading>🍸App name🍸</Heading>
      <CocktailsOverview data={data} error={error} drinks={drinks} />
      <Navigation />
    </div>
  );
}

const Heading = styled.h1`
  position: sticky;
  top: 0;
  text-align: center;
  background: #82be81;
  color: white;
  padding: 18px 12px;
  margin: 0;
`;
