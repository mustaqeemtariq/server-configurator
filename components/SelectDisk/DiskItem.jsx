import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import QuantityControlButton from "../QuantityControlButton";
import { HDD_LIMIT, SSD_LIMIT } from "@utils/config";
import { selectDisk } from "@store/slices/configuratorSlice";
import { getTotalDisksCount } from "./utils";

const HIDE_SPIN_BUTTONS_ON_NUMBER_INPUT =
  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

const DiskItem = ({ data, limit }) => {
  const variants = data.form_factor.split(",");

  const [quantity, setQuantity] = useState(0);
  const [variant, setVariant] = useState(() =>
    variants.length > 0 ? variants[0] : ""
  );

  const { selectedHDD, selectedSSD, premiumDisksOnly } = useSelector(
    (state) => state.configurator.disk
  );
  const dispatch = useDispatch();

  const isHDD = data.diskType === "SATA";

  const selectedCollection = isHDD ? selectedHDD : selectedSSD;
  const isSelected = data.disk_id in selectedCollection;

  const totalSelectedDisksQuantity = getTotalDisksCount(selectedCollection);

  useEffect(() => {
    setQuantity(0);
  }, [premiumDisksOnly]);

  useEffect(() => {
    setQuantity(0);
    setVariant(variants.length > 0 ? variants[0] : "");
  }, [data]);

  const updateQuantity = (updatedQuantity) => {
    dispatch(
      selectDisk({
        id: data.disk_id,
        quantity: updatedQuantity,
        variant,
        data,
        isHDD,
      })
    );
    setQuantity(updatedQuantity);
  };

  const handleVariantChange = (event) => {
    const updatedVariant = event.target.value;
    if (isSelected) {
      dispatch(
        selectDisk({
          id: data.disk_id,
          variant: updatedVariant,
          quantity,
          data,
          isHDD,
        })
      );
    }
    setVariant(updatedVariant);
  };

  return (
    <div className="flex items-center gap-4 col-span-2">
      <div
        className={`flex-1 flex items-center gap-3 px-2 py-2 rounded-lg border ${
          isSelected
            ? "border-sky-600 bg-sky-100"
            : "border-sky-400 bg-gray-50"
        }`}
      >
        <div className="relative rounded flex items-center justify-center text-xs text-white">
          <img
            src={data.imagesPath}
            width={44}
            height={44}
            // className="w-12 h-12"
            alt=""
          />
          {/* <div className="absolute text-xs border border-gray-200 text-gray-600 font-medium -bottom-1 right-0 p-1 rounded-lg bg-gradient-to-b from-gray-50/20 to-gray-300/50 backdrop-blur-sm">
            {data.cpu_id}
          </div> */}
        </div>
        <div className="flex-1">
          {`${data.storage_size}${data.storage_unit}`}
          <span className="block leading-0 text-xs text-gray-500">
            {data.price} {data.price_unit} {data.payment_frequency}
          </span>
        </div>
        <div className="flex flex-col">
          <select
            className="text-sm rounded-md bg-gray-100 border p-2 border-gray-400 font-medium opacity-50 "
            onChange={handleVariantChange}
            defaultValue={variant}
          >
            {variants.map((item, index) => (
              <option value={item} key={`${index} + ${item}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <QuantityControlButton
          icon={faMinus}
          onClick={() => updateQuantity(quantity - 1)}
          disabled={quantity <= 0}
        />
        <input
          type="number"
          className={`${HIDE_SPIN_BUTTONS_ON_NUMBER_INPUT} px-2 py-1 text-sm text-center rounded-lg w-10 bg-gray-50 border border-gray-300`}
          value={quantity}
          onChange={(event) => updateQuantity(Number(event.target.value))}
        />
        <QuantityControlButton
          icon={faPlus}
          onClick={() => updateQuantity(quantity + 1)}
          disabled={totalSelectedDisksQuantity >= limit}
        />
      </div>
    </div>
  );
};

export default DiskItem;
