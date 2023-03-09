import Head from "next/head";
import { useRouter } from "next/router";

export default function Cocktail({ drinks }) {
  const router = useRouter();
  const { idDrink } = router.query;

  const currentCocktail = drinks.find(
    (cocktail) => cocktail.idDrink === idDrink
  );

  if (!currentCocktail) {
    return <div>Failed to load</div>;
  }

  const { strDrink, strInstructions } = currentCocktail;
  return (
    <>
      <Head>
        <title>{strDrink}</title>
      </Head>
      <h1>{strDrink}</h1>
      <p>{strInstructions}</p>
    </>
  );
}
