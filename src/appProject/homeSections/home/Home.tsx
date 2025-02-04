"use client";
import React from "react";
import { useData } from "../data/data";
import { useSearch } from "@/stores/SearchStore";
import scss from "./Home.module.scss";
import Image from "next/image";

const Home = () => {
  const { data } = useData();
  const { searchQuery } = useSearch();

  const filteredData = data.filter((el) =>
    el.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <h1>Мортол комбат персонажи</h1>
          <div className={scss.block}>
            {filteredData.length > 0 ? (
              filteredData.map((el, index) => (
                <div className={scss.box} key={index}>
                  <Image width={330} height={350} src={el.image} alt="" />
                  <h1>{el.title}</h1>
                </div>
              ))
            ) : (
              <p className="no-product">Нет продуктов</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
