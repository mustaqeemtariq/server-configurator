import { useState } from "react";

export const useDropdownState = () => {
  const [isDiscountVisible, setDiscountVisible] = useState(false);
  const [isContractTypeVisible, setContractTypeVisible] = useState(false);
  const [isContractDurationVisible, setContractDurationVisible] =
    useState(false);
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handleDropDownClick = (componentName) => {
    setDiscountVisible((prevValue) =>
      componentName === "Discount" ? !prevValue : false
    );
    setContractTypeVisible((prevValue) =>
      componentName === "ContractType" ? !prevValue : false
    );
    setContractDurationVisible((prevValue) =>
      componentName === "ContractDuration" ? !prevValue : false
    );
    setPaymentVisible((prevValue) =>
      componentName === "Payment" ? !prevValue : false
    );
  };

  return {
    isDiscountVisible,
    isContractTypeVisible,
    isContractDurationVisible,
    isPaymentVisible,
    handleDropDownClick,
  };
};
