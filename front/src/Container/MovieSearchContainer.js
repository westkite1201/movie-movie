import React, { Fragment, useState } from "react";
import MovieCard from "../Component/MovieCard";
import jsonData from "./item.json";
import { Input, Row, Col } from "antd";
import axios from "axios";
const { Search } = Input;
const MovieSearchContainer = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const [items, setItems] = useState();

  const handleButton = async () => {
    try {
      const res = await axios.get("http://localhost:3031/naver/getNaverMovie", {
        params: {
          query: query,
        },
      });
      if (res && res.status === 200) {
        const { data } = res;
        console.log(data);
        setItems(data.items);
      }
    } catch (e) {
      console.log("error ", e);
    }
  };

  return (
    <Fragment>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onChange={handleQuery}
          onSearch={() => handleButton()}
          style={{ width: 200 }}
        />
      </div>

      <div>
        <Row>
          {items &&
            items.map((item) => {
              return (
                <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                  <MovieCard item={item}></MovieCard>;
                </Col>
              );
            })}
        </Row>
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;
