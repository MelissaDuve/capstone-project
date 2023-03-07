/* eslint-disable react/jsx-key */
import Image from "next/image";
import useSWR from "swr";
import styled from "styled-components";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail";

export default function CocktailsOverview({}) {
  const fetcher = (URL) => fetch(URL).then((response) => response.json());
  const { data, error } = useSWR(URL, fetcher);
  const drinks = data?.drinks;

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <ul>
        {drinks?.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <ListItem>
            <li key={idDrink}>
              <h2>{strDrink}</h2>
              <Image
                src={strDrinkThumb}
                alt={strDrink}
                height={100}
                width={100}
              />
            </li>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: ;
  justify-content: center;
  max-width: 340px;
`;

const ListItem = styled.li`
  list-style-type: none;
  border-radius: 20px;
  border: 3px solid grey;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 10px;
`;
