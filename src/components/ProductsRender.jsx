import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { styled } from "@mui/material";
import { getAll } from "../store/slice/Db";

function ProductsRender() {
  const db = useSelector((i) => i.dataBase.data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAll())
  },[])
  return (
    <WrapperAll>
      {[...db]?.map((i, idx) => (
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
