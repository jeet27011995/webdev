import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_ENDPOINT } from "../../utilss/APIEndPoints";

const ProductPage = () => {
  const parms = useParams();
  console.log(parms.id);
  const [product, setProduct] = useState({});
  const productDetails = async () => {
    const { data } = await axios.get(`${PRODUCTS_ENDPOINT}/${parms.id}`);
    setProduct(data);
  };

  useEffect(() => {
    productDetails();
  }, []);

  return (
    <div style={{ width: "50%", marginLeft: "20vw" }}>
      <table className="OrderTable">
        <tbody id="orders-table">
          <tr className="TableRow">
            <th>Detail</th>
            <th>Value</th>
          </tr>
          <tr className="TableRow">
            <td className="SecondaryText">Product ID</td>
            <td className="PrimaryText">{product.id}</td>
          </tr>

          <tr className="TableRow">
            <td className="SecondaryText">Medicine Name</td>
            <td className="PrimaryText">{product.medicineName}</td>
          </tr>

          <tr className="TableRow">
            <td className="SecondaryText">Medicine Brand</td>
            <td className="PrimaryText">{product.medicineBrand}</td>
          </tr>

          <tr className="TableRow">
            <td className="SecondaryText">Stock</td>
            <td className="PrimaryText">{product.stock}</td>
          </tr>

          <tr className="TableRow">
            <td className="SecondaryText">Unit Price</td>
            <td className="PrimaryText">{product.unitPrice}</td>
          </tr>

          <tr className="TableRow">
            <td className="SecondaryText">Expiry Date</td>
            <td className="PrimaryText">{product.expiryDate}</td>
          </tr>

          <tr className="TableRow">
            <td className="SecondaryText">Prescription Required</td>
            <td className="PrimaryText">
              {product.prescriptionRequired == true ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
