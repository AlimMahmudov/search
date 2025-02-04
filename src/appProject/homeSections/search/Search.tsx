"use client";
import { useSearch } from "@/stores/SearchStore";
import scss from "./Search.module.scss";

const Search = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <div id={scss.Search}>
      <div className="container">
        <div className={scss.search}>
          <button>o-</button>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
