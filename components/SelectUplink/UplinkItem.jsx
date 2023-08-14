import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import QuantityControlButton from "../QuantityControlButton";
import { selectUplink } from "@store/slices/configuratorSlice";

const HIDE_SPIN_BUTTONS_ON_NUMBER_INPUT =
  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

const UplinkItem = ({ data, onClick }) => {
  const [quantity, setQuantity] = useState(0);
  const [variant, setVariant] = useState(() => {
    return data?.data_capacity?.length ? data.data_capacity[0].label : "";
  });

  const { selectedUplink } = useSelector((state) => state.configurator.uplink);

  const dispatch = useDispatch();

  const isSelected =
    selectedUplink && selectedUplink.uplink_id === data.uplink_id;

  const dataCapacity = data?.data_capacity?.length ? data.data_capacity : [];

  const limit = data.limit;

  useEffect(() => {
    if (!isSelected) {
      setQuantity(0);
    }
  }, [isSelected]);
  const updateQuantity = (updatedQuantity) => {
    dispatch(
      selectUplink({
        data,
        quantity: updatedQuantity,
        variant: dataCapacity.find((item) => item.label === variant),
      })
    );
    setQuantity(updatedQuantity);
  };

  const handleVariantChange = (event) => {
    const updatedVariant = event.target.value;

    dispatch(
      selectUplink({
        data,
        quantity,
        variant: dataCapacity.find((item) => item.label === updatedVariant),
      })
    );
    setVariant(updatedVariant);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4" onClick={onClick}>
        <div
          className={`flex items-center gap-2 px-2 py-1 rounded-lg  border ${
            isSelected
              ? "border-sky-600 bg-sky-100"
              : "border-sky-400 bg-gray-50"
          }`}
        >
          <h3 className="w-12 font-medium text-base">
            {data.transfer_speed}
          </h3>
          <div className="flex flex-col p-4">
            <select
              className="w-36 text-sm rounded-md border border-gray-400 bg-gray-100 font-medium p-2"
              value={variant}
              onChange={handleVariantChange}
            >
              {dataCapacity.map((item) => (
                <option value={item.label} key={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <QuantityControlButton
            icon={faMinus}
            disabled={quantity == 0}
            onClick={() => updateQuantity(quantity - 1)}
          />
          <input
            type="number"
            className={`${HIDE_SPIN_BUTTONS_ON_NUMBER_INPUT} px-2 py-1 text-center text-sm rounded-lg w-10 bg-gray-50 border border-gray-300`}
            value={quantity}
            onChange={(event) => updateQuantity(Number(event.target.value))}
          />
          <QuantityControlButton
            icon={faPlus}
            disabled={quantity >= limit}
            onClick={() => updateQuantity(quantity + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default UplinkItem;
