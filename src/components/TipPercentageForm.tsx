import { Dispatch } from "react";
import { OrderAction } from "../reducer/order-reducer";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercentageFormProps = {
  dispatch: Dispatch<OrderAction>;
  tip: number;
};
export const TipPercentageForm = ({
  dispatch,
  tip,
}: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="my-5">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2 ">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value },
                })
              }
              checked={tip === tipOption.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
