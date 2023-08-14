// import Dropdown from "@components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import useConfiguratorSelection from "./useConfiguratorSelection";

// import {
//   setContractDuration,
//   setContractType,
//   setDiscount,
//   setPaymentMethod,
// } from "@store/slices/configuratorSlice";

const SelectionItem = ({ title, text }) => {
  return (
    <div className="p-2">
      <h4>{title}:</h4>
      <ul className="rounded-md font-semibold text-white bg-sky-500 px-2 py-1 list-disc list-inside"><li>{text}</li></ul>
    </div>
  );
};

const SelectionPriceItem = ({ title, text }) => {
  return (
    <div className="p-4 py-7 h-full flex items-center justify-center bg-sky-500 w-full rounded-lg font-semibold text-white">
      <h4>
        {title}:&nbsp; <span>{text} €</span>
      </h4>
    </div>
  );
};

const YourSelection = () => {
  const {
    cpuSelection,
    diskSelection,
    ramSelection,
    osSelection,
    gpuSelection,
    uplinkSelection,
    setupCosts,
    monthlyPayments,
  } = useConfiguratorSelection();

  const {
    discount,
    contractType,
    contractDuration,
    paymentMethod,
    cpu: { selectedCPU },
    config: {
      discount: DISCOUNT_OPTIONS,
      contract_type: CONTRACT_TYPE_OPTIONS,
      contract_duration: CONTRACT_DURATION_OPTIONS,
      payment_method: PAYMENT_METHOD_OPTIONS,
    },
  } = useSelector((state) => state.configurator);


  if (
    !(
      DISCOUNT_OPTIONS &&
      CONTRACT_TYPE_OPTIONS &&
      CONTRACT_DURATION_OPTIONS &&
      PAYMENT_METHOD_OPTIONS
    )
  )
    return null;
  return (
    <div className="p-4 py-0 rounded-lg shadow-sm w-full">
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className=" p-2 bg-white-100 w-full shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3">
          <div>
            <SelectionItem title="CPU" text={cpuSelection} />
          </div>
          <div className="p-2 md:row-span-2">
            <h4>Disk:</h4>
            <ul className="rounded-md text-white font-semibold bg-sky-500 px-2 py-1 list-disc list-inside">
            {diskSelection.length > 0 ? (
              diskSelection.map((selection) => <li key={selection}>{selection}</li>)
            ) : (
              <p>-</p>
            )}
            </ul>
          </div>
          <SelectionItem title="Uplink" text={uplinkSelection} />
          <SelectionItem title="RAM" text={ramSelection} />
          <div className="row-span-2 p-2">
            <h3>Cost</h3>
            <div className="flex flex-col h-full pb-12 gap-y-2 lg:gap-y-0 lg:flex-row  md:gap-x-2 text-center">
              <SelectionPriceItem title="Setupkosten" text={setupCosts < 0 ? 0 : setupCosts} />
              <SelectionPriceItem
                title="Monatlicher Preis"
                text={monthlyPayments}
              />
            </div>
          </div>
          <SelectionItem title="GPU" text={gpuSelection} />
          <SelectionItem title="OS" text={osSelection} />
        </div>
      </div>
    </div>
  );
};

export default YourSelection;
