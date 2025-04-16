import { Dispatch, useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { OrderAction } from "../reducer/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderAction>;
};

export const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  const subTotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotal * tip, [tip, order]);

  const total = useMemo(() => subTotal + tipAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina: </h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subTotal)} </span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)} </span>
        </p>
        <p>
          Total a Pagar:{" "}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        disabled={total === 0}
        onClick={() => dispatch({ type: "clear-order" })}
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 hover:bg-gray-800  transition-colors disabled:opacity-10"
      >
        Guardar Orden
      </button>
    </>
  );
};
