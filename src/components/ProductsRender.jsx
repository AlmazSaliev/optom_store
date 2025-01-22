import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { styled } from "@mui/material";

function ProductsRender() {
  const db = useSelector((i) => i.dataBase.data);
  return (
    <WrapperAll>
      {[...db, ...db]?.map((i, idx) => (
        <ProductCard i={i} key={i?.id + " " + idx} />
      ))}
    </WrapperAll>
  );
}
export default ProductsRender;
const WrapperAll = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  overflow: hidden;
  gap: 10px;
  padding: 5px;
`;
