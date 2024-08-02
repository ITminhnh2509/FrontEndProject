import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const url =
    "https://66a07ba77053166bcabb8de3.mockapi.io/studentt/v1/products";
  const fetchData = () => {
    axios
      .get(url + "/" + id)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Product detail: {id}</h1>
      <p>name: {data.name}</p>
      <p>Description: {data.description}</p>
      <p>price: {data.price}</p>
    </div>
  );
}
