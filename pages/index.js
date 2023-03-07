import CocktailsOverview from "@/components/CocktailsOverview/CocktailsOverview";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Heading>🍸App name🍸</Heading>
      <CocktailsOverview />
    </main>
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
