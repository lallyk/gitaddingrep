import React, { useState } from "react";

const productContext = React.createContext({
  title: "",
  imageUrl: "",
  rating: 0,
  price: 0,
  detail: "",
  changeDetail: () => {},
});

export const ProductContextProvider = (props) => {
  const [product, setProduct] = useState({
    title: "",
    imageUrl: "",
    rating: 0,
    price: 0,
    detail: "",
  });

  const changeDetailHandler = (item) => {
    setProduct({
      title: item.title,
      imageUrl: item.imageUrl,
      rating: item.rating,
      detail: item.detail,
      price: item.price,
    });
  };
  const productcontext = {
    title: product.title,
    imageUrl: product.imageUrl,
    rating: product.rating,
    detail: product.detail,
    price: product.price,
    changeDetail: changeDetailHandler,
  };

  return (
    <productContext.Provider value={productcontext}>
      {props.children}
    </productContext.Provider>
  );
};

export default productContext;
