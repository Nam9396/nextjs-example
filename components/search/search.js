import { useLazyQuery } from "@apollo/client";
import clsx from "clsx";
import { useState } from "react";
import SearchInput from "./searchInput";
import SearchResult from "./searchResult";
import { GET_SEARCH_POST } from "../../lib/function"


const Search = () => {
  const [ string, setString ] = useState();
  const [ getPost, { loading, error, data } ] = useLazyQuery(GET_SEARCH_POST);
  const handleSubmit = (e) => {
    e.preventDefault();
    getPost({ variables: {search: string} });
    setString(null);
  };

  return (
    <div className={clsx(
      'w-full p-4 box-col justify-center items-center my-5',
    )}>
      
      <SearchInput 
        setString={setString} 
        string={string} 
        handleSubmit={handleSubmit}
      />

      {loading ? (
        <p>...Loading</p>
      ) : error ? (
        <p>{`Error: ${error}`}</p>
      ) : data ? (
        <SearchResult resultPosts={data} />
      ) : null}
      
    </div>
  )
};

export default Search;