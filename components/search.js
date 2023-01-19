import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_SEARCH_POST } from "../lib/function";
import css from "./search.module.css";
import Link from "next/link";

const Search = () => {
  const [ key, setKey ] = useState(null);
  const [ display, setDisplay ] = useState("none");
  const [ getPost, { loading, error, data } ] = useLazyQuery(GET_SEARCH_POST);
  const handleSubmit = (e) => {
    e.preventDefault();
    getPost({ variables: { search: key } });
    setDisplay("flex");
    setKey(null);
  };
  const myStyle = {
    display: display
  }
  

  return (
    <div className={css.search}>

      <form className={css.form} onSubmit={handleSubmit}>
        <input 
          className={css.input}
          type="text"
          placeholder="Tìm kiếm nhanh"
          name="search"
          value={key || ""}
          onChange={(e) => setKey(e.target.value)}
        />
        <button type="submit" className={css.searchButton}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{`Error: ${error}`}</p>
      ) : data ? (
        <div className={css.resultBox} style={myStyle}>
          <div className={css.header}>
            <div className={css.textHeader}>Kết quả tìm kiếm</div>
            <button className={css.exitButton} onClick={() => setDisplay("none")}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className={css.resultList}>
            {data.posts.nodes.map(item => (
              <Link className={css.resultDetail}
                href={item.uri}
              >{item.title}</Link>
            ))}
            <div className={css.resultDetail}></div>
          </div>
        </div>
      ) : null}

    </div>
  )
};

export default Search;