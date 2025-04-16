import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderAction } from "../reducer/order-reducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderAction>;
};

export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg ">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad:{item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "remove-order", payload: { id: item.id } })
              }
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:cursor-pointer"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
