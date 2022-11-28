import React, { useContext } from "react";
const CartContext = React.createContext({
  item: [],
  quantity: 0,
  addItem: () => {},
  removeItem: () => {},
});
export const CartContextProvider = (props) => {

  const loginCtx = useContext(loginContext);
  const history = useHistory();

  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }
  // console.log(userEmail);

  const [cartState, setCartState] = useState({ item: [], totalAmount: 0 });

  // Adding cart data
  const addItem = (newItem) => {
    const addingItem = async (preCartState) => {
      let updatedItem = [...preCartState.item];
      let updatedAmount = preCartState.totalAmount;
      updatedAmount = updatedAmount + newItem.price * newItem.quantity;
    }
  }
export default CartContext;
