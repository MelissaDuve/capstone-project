import CocktailsOverview from "@/components/Footer/CocktailsOverview/CocktailsOverview";
import styled from "styled-components";

export default function Home({ data, error }) {
  return (
    <main>
      <Heading>🍸App name🍸</Heading>
      <CocktailsOverview data={data} error={error} />
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
