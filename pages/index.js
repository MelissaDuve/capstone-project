/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { useRouter } from "next/router";
import { CldImage } from "next-cloudinary";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cocktailsPreview");
  };
  return (
    <main>
      {/* <ImageContainer> */}
      <img src="/mycocktail.jpg" alt="My-Image" height="730" width="410" />
      <ImageText>It's time for a Drink!</ImageText>
      <StyledButton onClick={handleClick}>Get Started</StyledButton>
      {/* </ImageContainer> */}
      {/* <CldImage
        width="960"
        height="600"
        src="/cld-sample-4.jpg"
        sizes="100vw"
        alt="yummy food"
      /> */}
    </main>
  );
}

const ImageContainer = styled.div`
  position: relative;
`;

const ImageText = styled.p`
  position: absolute;
  top: 6%;
  left: 35%;
  color: #fc853a;
  font-family: serif;
  font-style: italic;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 35%;
  right: 2%;
  border-radius: 40px;
  color: white;
  border: 1px solid black;
  font-size: 15px;
  padding: 12px;
  background-color: #383838;
  width: 140px;
  font-weight: 100;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  &:hover {
    cursor: pointer;
    background-color: #800000;
    color: black;
    font-weight: bold;
    border: 1px solid grey;
  }
`;
