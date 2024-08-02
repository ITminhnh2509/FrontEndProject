import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataProduct } from "./../../redux/productSlice";
import Pagination from "react-js-pagination";
import "./product.css";
export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { products, totalPage } = useSelector((state) => state.products);

  const handle_Page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchDataProduct(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={5}
        totalItemsCount={totalPage * 5} // Assuming totalPage represents number of pages, not items
        pageRangeDisplayed={3}
        onChange={handle_Page}
      />
    </div>
  );
}
