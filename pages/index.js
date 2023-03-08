/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ImageContainer>
        <img src="/mycocktail.jpg" alt="My-Image" height="730" width="410" />
        <ImageText>It's time for a Drink!</ImageText>
        <Link href="/cocktailsPreview" legacyBehavior={true}>
          <StyledLink>Get started</StyledLink>
        </Link>
      </ImageContainer>
    </main>
  );
}

const ImageContainer = styled.div`
  position: relative;
`;

const ImageText = styled.p`
  position: absolute;
  top: 6%;
  left: 40%;
  color: #fc853a;
  font-family: serif;
  font-style: italic;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const StyledLink = styled.a`
  position: absolute;
  top: 35%;
  right: 4%;
  border-radius: 30px;
  font-size: 20px;
  padding: 10px;
  background-color: lightgrey;
  font-weight: bold;
`;
