import { useReducer } from "react";
import { MenuesItem } from "./components/MenuesItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db";

import { initialState, orderReducer } from "./reducer/order-reducer";
function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className="grid md:grid-cols-2  max-w-7xl mx-auto py-20">
        <div className="p-5 ">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuesItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg p-5 space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentageForm dispatch={dispatch} tip={state.tip} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="font-semibold text-lg text-center">
              La Orden está vacia...
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
