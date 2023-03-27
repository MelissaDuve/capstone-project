import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import Form from "@/components/Form";
import FavoriteButton from "@/components/FavoriteButton";

export default function Cocktail({ drinks, isFavorite }) {
  const router = useRouter();
  const { idDrink } = router.query;

  const currentCocktail = drinks?.find(
    (cocktail) => cocktail.idDrink === idDrink
  );

  if (!currentCocktail) {
    return <div>Failed to load</div>;
  }
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
      <Background>
        <Head>
          <title>{strDrink}</title>
        </Head>
        <ImageStyle>
          <Image
            src={strDrinkThumb}
            alt={strDrink}
            height={200}
            width={200}
            // style={{
            //   borderRadius: "15%",
            // }}
          />
        </ImageStyle>

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
        <Form idDrink={idDrink} />

        <StyledName>
          <p>{strDrink}</p>
        </StyledName>
        <StyledBackButton onClick={() => router.back()}>
          <svg
            stroke="currentColor"
            fill="black"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
          </svg>
        </StyledBackButton>
        <FavoriteButton
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </Background>
      <Navigation />
    </>
  );
}
const ImageStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 75px 10px 20px;
  & img {
    border-radius: 20%;
    padding: 20px;
  }
`;

const Background = styled.p`
  background-image: url("/color.jpg");
  background-position: center;
  background-size: cover;
`;
const StyledName = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row-reverse;
  background-color: #708090;
  font-weight: bold;
  border-bottom: 8px solid #b9137c;
  justify-content: center;
  font-size: 22px;
  align-items: center;
`;
const StyledBackButton = styled.button`
  position: fixed;
  top: 23px;
  left: 15px;
  border-radius: 7px;
  color: grey;
  border: 1px solid black;
  font-size: 15px;
  width: 50px;
  height: 25px;
  background-color: #708090;
  &:hover {
    cursor: pointer;
  }
`;
