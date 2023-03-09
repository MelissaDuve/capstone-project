import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail";

export default function App({ Component, pageProps }) {
  const fetcher = (URL) => fetch(URL).then((response) => response.json());
  const { data, error } = useSWR(URL, fetcher);
  const drinks = data?.drinks;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} data={data} error={error} drinks={drinks} />
    </>
  );
}
