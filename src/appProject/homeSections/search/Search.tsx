"use client";
import { useSearch } from "@/stores/SearchStore";
import React from "react";

const Search = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <div>
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
