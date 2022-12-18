import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyCard from "../components/Card";
import { getData } from "../Redux/action";

export const Home = () => {
  const dispatch = useDispatch();
  const { vendorsList, isLoading } = useSelector((store) => store.reducer);
  const [elem, setElem] = useState(10);

  useEffect(() => {
    if (vendorsList.length === 0) {
      dispatch(getData());
    }
  }, [vendorsList.length, dispatch]);
  useEffect(() => {
    dispatch(getData());
  }, []);
  const loadMore = () => {
    setElem(elem + 10);
  };
  let slicedData = vendorsList?.slice(0, elem);
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "15px auto",
        }}
        mt={4}
      >
        {!isLoading ? (
          slicedData?.map((item) => {
            return <MyCard key={item._id} {...item} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </Container>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => loadMore()}>Load More</Button>
      </Box>
    </>
  );
};
