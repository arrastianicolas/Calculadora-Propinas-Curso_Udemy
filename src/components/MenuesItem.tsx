import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderAction } from "../reducer/order-reducer";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderAction>;
};

export const MenuesItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      onClick={() => dispatch({ type: "add-order", payload: { item } })}
      className="border-2 rounded-xl border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 "
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
