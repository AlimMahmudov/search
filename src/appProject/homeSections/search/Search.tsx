"use client";
import { useSearch } from "@/stores/SearchStore";
import scss from "./Search.module.scss";

const Search = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <div className={scss.Search}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
