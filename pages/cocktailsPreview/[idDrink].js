import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function Cocktail({ drinks }) {
  const router = useRouter();
  const { idDrink } = router.query;

  const currentCocktail = drinks?.find(
    (cocktail) => cocktail.idDrink === idDrink
  );

  if (!currentCocktail) {
    return <div>Failed to load</div>;
  }

  const {
    strDrink,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
  } = currentCocktail;
  return (
    <>
      <Head>
        <title>{strDrink}</title>
      </Head>
      <ImageStyle>
        <Image
          src={strDrinkThumb}
          alt={strDrink}
          height={300}
          width={300}
          style={{
            borderRadius: "15%",
          }}
        />
      </ImageStyle>
      <h2>{strDrink}</h2>
      <p>{strInstructions}</p>
      <div>
        <strong>Ingredients:</strong>
      </div>
      <ul>
        {strIngredient1 && (
          <li>
            {strMeasure1} {strIngredient1}
          </li>
        )}
        {strIngredient2 && (
          <li>
            {strMeasure2} {strIngredient2}
          </li>
        )}
        {strIngredient3 && (
          <li>
            {strMeasure3} {strIngredient3}
          </li>
        )}
        {strIngredient4 && (
          <li>
            {strMeasure4} {strIngredient4}
          </li>
        )}
        {strIngredient5 && (
          <li>
            {strMeasure5} {strIngredient5}
          </li>
        )}
        {strIngredient6 && (
          <li>
            {strMeasure6} {strIngredient6}
          </li>
        )}
      </ul>
    </>
  );
}
const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
