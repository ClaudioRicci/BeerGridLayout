import React, { useState, useEffect, memo } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import axios from "axios";
import BeerCard from "../beer-card";

function Grid() {
  const [data, setData] = useState({ beers: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=10";
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const result = await axios.get(url, { cancelToken: source.token });
        console.log(result.data);
        setData({ beers: result.data });
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          // request cancelled
        } else {
          throw error;
        }
      }
    };
    fetchData();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="grid" data-testid="grid">
      {loading && <div>loading....</div>}
      {!loading && (
        <>
          {data.beers.map((item, index) => (
            <BeerCard
              key={index.toString()}
              image={item.image_url}
              title={item.name}
              description={item.brewers_tips}
            />
          ))}
        </>
      )}
    </div>
  );
}

const StyledGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;

render(<StyledGrid></StyledGrid>, document.getElementById("root"));

export default memo(Grid);
