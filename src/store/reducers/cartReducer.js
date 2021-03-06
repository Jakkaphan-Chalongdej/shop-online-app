import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "DS-2CD2021G1-I  ",
      desc: "กล้องวงจรปิดHikvision",
      price: 110,
      img: "/images/DS-2CD2021G1-I.jpg",
    },
    {
      id: 2,
      title: "DS-2CD1123G0E-I",
      desc: "กล้องวงจรปิดHikvision",
      price: 80,
      img: "/images/DS-2CD1123GOE-I.jpg",
    },
    {
      id: 3,
      title: "DS-2CD1023G0E-I",
      desc: "กล้องวงจรปิดHikvision",
      price: 120,
      img: "/images/DS-2CD1023G0E-I.jpeg",
    },
    {
      id: 4,
      title: "CDS-2CE56D8T-IT3ZF",
      desc: "กล้องวงจรปิดHikvision",
      price: 260,
      img: "/images/16003-ds_2ce56d8t_it3zf-640x480.jpg",
    },
    {
      id: 5,
      title: "DS-2CE16U1T-ITF",
      desc: "กล้องวงจรปิดHikvision",
      price: 90,
      img: "/images/DS-2CE16U1T-ITF.jpg",
    },
    {
      id: 6,
      title: "DS-2CD2685FWD-IZS",
      desc: "กล้องวงจรปิดHikvision",
      price: 90,
      sale: true,
      img: "/images/20170605074453780.png",
    },
    {
      id: 7,
      title: "DS-2CE16U1T-ITF",
      desc: "กล้องวงจรปิดHikvision",
      price: 100,
      sale: true,
      img: "/images/DS-2CE16U1T-ITF.jpg",
    },
    {
      id: 8,
      title: "DS-2CD2685FWD-IZS",
      desc: "กล้องวงจรปิดHikvision",
      price: 90,
      sale: true,
      img: "/images/20170605074453780.png",
    },
    {
      id: 9,
      title: "DS-2CD2685FWD-IZS",
      desc: "กล้องวงจรปิดHikvision",
      price: 90,
      sale: true,
      img: "/images/20170605074453780.png",
    },
    {
      id: 10,
      title: "DS-2CD2685FWD-IZS",
      desc: "กล้องวงจรปิดHikvision",
      price: 90,
      sale: true,
      img: "/images/20170605074453780.png",
    },
  ],
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700,
  },
  usedCurrency: { KES: 100, symbol: "Ksh " },
  wishlist: [],
  addedItems: [],
  total: 0,
  cartTotal: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        cartTotal: state.cartTotal + 1,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotalcart = state.cartTotal + 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        cartTotal: newTotalcart,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    let newTotalcart = state.cartTotal - itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      cartTotal: newTotalcart,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      let newTotalcart = state.cartTotal - 1;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        cartTotal: newTotalcart,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;

      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
