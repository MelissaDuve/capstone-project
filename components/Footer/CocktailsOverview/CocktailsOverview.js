import Image from "next/image";
import useSWR from "swr";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail";

export default function CocktailsOverview({}) {
  const fetcher = (URL) => fetch(URL).then((response) => response.json());
  const { data, error } = useSWR(URL, fetcher);
  const drinks = data?.drinks;
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {drinks?.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <li key={idDrink}>
            <h3>{strDrink}</h3>
            <Image
              src={strDrinkThumb}
              alt={strDrink}
              height={600}
              width={600}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
