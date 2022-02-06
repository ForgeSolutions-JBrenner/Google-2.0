import React from "react";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full pl-3 pr-3 md:pl-[14%] lg:pl-52 sm:pl-20">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results
        returned in ({results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
          <div className="max-w-xl mb-8" key={result.link}>
              {/* two things will be going in here  */}
              <div className="group">
                  {/* heading and the link */}
                  <a href={result.link} className="text-sm">
                    {result.formattedUrl}
                  </a>
                  <a href={result.link} className="">
                      <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline ">{result.title}</h2>
                  </a>
                  {/* snippet underneath the heading */}
                  <p className=" line-clamp-2 cursor-pointer">{result.snippet}</p>
              </div>
          </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
