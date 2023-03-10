import Navigation from "@/components/Navigation";
import styled from "styled-components";

export default function Favorites() {
  return (
    <>
      <Header>
        <h3>Favorite Cocktails</h3>
      </Header>
      <Navigation />
    </>
  );
}

const Header = styled.h3`
  margin: 0;
  right: 0;
  left: 0;
  display: flex;
  position: fixed;
  background-color: darkgreen;
  justify-content: center;
`;
