import { createSlice } from "@reduxjs/toolkit";
const data = [
  {
    id: 1,
    title: "title",
    address: "address",
    price: "price",
    count: "count",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J9BOlkydJ4vwjKPlrE08yih7qt0hhXGNwQ&s",
  },
  {
    id: 2,
    title: "title 2",
    address: "address 2",
    price: "price 2",
    count: "count 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVKcbgJsJqC2sjGheZ0RQYzuh13A1CVPgSw&s",
  },
  {
    id: 3,
    title: "title 3",
    address: "address 3",
    price: "price 3",
    count: "count 3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOAzYX9bBZOte6LZHlTc3ZV3g6HNxMayTjg&s",
  },
  {
    id: 4,
    title: "title 4",
    address: "address 4",
    price: "price 4",
    count: "count 4",
    img: "https://img.freepik.com/premium-photo/box-potatoes-that-has-been-made-into-potato-farm_1295019-23565.jpg",
  },
  {
    id: 5,
    title: "title 5",
    address: "address 5",
    price: "price 5",
    count: "count 5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xgMHxmgSogtRRwcTEoo0GmrZDtnxxCDy9A&s",
  },
  {
    id: 6,
    title: "title 6",
    address: "address 6",
    price: "price 6",
    count: "count 6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6tnLt9BlRJR02xYTOvH-ELrtmY7mvS4oPA&s",
  },
  {
    id: 7,
    title: "title 7",
    address: "address 7",
    price: "price 7",
    count: "count 7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgv3vusjlcfBRxJ389pTd5nTU9GWB9BrDsg&s",
  },
  {
    id: 8,
    title: "title 8",
    address: "address 8",
    price: "price 8",
    count: "count 8",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWAOclCVJUwEvepBBXviRSvwk4l0NP5a4xw&s",
  },
];
const Db = createSlice({
  name: "data",
  initialState: {
    data,
    find_db: {},
  },
  reducers: {
    getAllProducts: (state) => {
      state.data = data;
    },
    getProductById: (state, actions) => {
      state.find_db = data?.find((i) => i?.id === actions.payload);
    },
  },
});
export const DataBase = Db.actions;
export default Db;
