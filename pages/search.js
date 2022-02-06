import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import response from "../response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div className="">
      <Head>
        <title>{router.query.term} - Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
    <SearchResults results={results} />
    </div>
  );
}

export default search;

export async function getServerSideProps(context) {
  // create a little helper function, to capture the data
  const useDummyData = true;
  //For pagination
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  //After the server has rendered.. Pass the results to the client..
  return {
    props: {
      results: data,
    },
  };
}
