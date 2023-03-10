/* eslint-disable react/jsx-key */
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function CocktailsOverview({ data, error, drinks }) {
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <ul>
        {drinks?.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <ListItem key={idDrink}>
            <h2>{strDrink}</h2>
            <Link href={`/cocktailsPreview/${idDrink}`}>
              <Image
                src={strDrinkThumb}
                alt={strDrink}
                height={100}
                width={100}
                style={{
                  borderRadius: "15%",
                  border: "3px solid grey",
                }}
              />
            </Link>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
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
