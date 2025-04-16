import { MenuItem, OrderItem } from "../types";

export type OrderAction =
  | { type: "add-order"; payload: { item: MenuItem } }
  | { type: "remove-order"; payload: { id: MenuItem["id"] } }
  | { type: "clear-order" }
  | { type: "add-tip"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderAction
) => {
  if (action.type === "add-order") {
    const existingItem = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );
    let updateOrder: OrderItem[] = [];
    if (existingItem) {
      updateOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      updateOrder = [...state.order, newItem];
    }
    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === "remove-order") {
    if (state.order.length === 0) {
      return {
        ...state,
        tip: 0,
      };
    } else {
      const updateOrder = state.order.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        order: updateOrder,
      };
    }
  }

  if (action.type === "clear-order") {
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }
  if (action.type === "add-tip") {
    return {
      ...state,
      tip: action.payload.value,
    };
  }

  return state;
};
