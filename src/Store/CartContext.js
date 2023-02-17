import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import loginContext from "./login-context";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  purchased: () => {},
});
let initial = true;
export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const authCtx = useContext(loginContext);
  const userEmailId = authCtx.email?.split(".").join("");
  const cleanUserEmailId = userEmailId?.split("@").join("");

  useEffect(() => {
    const fetchingItems = async () => {
      try {
        const res = await axios.get(
          `https://expense-tracker-5dc05-default-rtdb.firebaseio.com//${cleanUserEmailId}.json`
        );
        console.log(res.data);
        res.data === null ? setItems([]) : setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingItems();
  }, [cleanUserEmailId]);

  const addItemToCartHandler = (item) => {
    let hasITems = false;
    const newArr = [...items];
    newArr.forEach((product, index) => {
      if (product.id === item.id) {
        hasITems = true;
        newArr[index].quantity = newArr[index].quantity + item.quantity;
      }
    });
    if (hasITems) {
      setItems(newArr);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const newArr = [...items];
    newArr.forEach((product, index) => {
      if (product.id === id) {
        if (product.quantity === 1) {
          newArr.splice(index, 1);
          setItems(newArr);
        } else {
          product.quantity--;
          setItems(newArr);
        }
      }
    });
  };

  useEffect(() => {
    const amountHandler = () => {
      if (!initial) {
        initial = true;
        return;
      }
      const newArr = [...items];
      const amount = newArr.reduce(
        (prev, curr) => (prev += curr.price * curr.quantity),
        0
      );
      setTotalAmount(amount);
    };
    const quantityHandler = () => {
      if (!initial) {
        initial = true;
        return;
      }
      const newArr = [...items];
      const quantity = newArr.reduce((prev, curr) => curr.quantity + prev, 0);
      setTotalQuantity(quantity);
    };
    amountHandler();
    quantityHandler();
  }, [items]);

  useEffect(() => {
    const addingItem = async () => {
      if (!initial) {
        initial = true;
        return;
      }
      try {
        const res = await axios.put(
          `https://expense-tracker-5dc05-default-rtdb.firebaseio.com//${cleanUserEmailId}.json`,
          items
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    addingItem();
  }, [cleanUserEmailId, items]);
  const purchased = async () => {
    alert("Your order has been placed");
    setItems([]);
    try {
      const res = await axios.delete(
        `https://expense-tracker-5dc05-default-rtdb.firebaseio.com//${cleanUserEmailId}.json`,
        items
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    purchased: purchased,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
