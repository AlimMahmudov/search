"use client";
import React from "react";
import { useData } from "../data/data";
import { useSearch } from "@/stores/SearchStore";

const Home = () => {
  const { data } = useData();
  const { searchQuery } = useSearch();

  const filteredData = data.filter((el) =>
    el.title.toUpperCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((el, index) => (
          <div className="card" key={index}>
            <h1>{el.title}</h1>
          </div>
        ))
      ) : (
        <p className="no-product">Нет продукта</p>
      )}
    </div>
  );
};

export default Home;
