"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import {
  getAllCPUs,
  getAllDisks,
  getAllRAMs,
  getAllUplinkInventories,
  getAllOSs,
  getAllGPUs,
  getConfig,
} from "@store/thunks";
import Footer from "@components/Footer";
import SelectCPU from "@components/SelectCPU";
import SelectDisk from "@components/SelectDisk";
import SelectRAM from "@components/SelectRAM";
import SelectUplink from "@components/SelectUplink";
import SelectOS from "@components/SelectOS";
import YourSelection from "@components/YourSelection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  selectCPU,
  selectCPUCompany,
  selectDisk,
  selectGPU,
  selectOS,
  selectRAM,
  selectUplink,
  setContractDuration,
  setContractType,
  setDiscount,
  setPaymentMethod,
} from "@store/slices/configuratorSlice";
import { CONTRACT_TYPE_VALUES } from "@utils/constants";
import Nav from "@components/Nav";
import SelectGPU from "@components/SelectGPU/SelectGPU";
import Dropdown from "@components/Dropdown";
import { contractDuration, paymentMethod } from "@utils/DropDowndata";
import useConfiguratorSelection from "@components/YourSelection/useConfiguratorSelection";
import { createCheckout } from "@api/admin";
import { Spinner } from "@animation/spinner";
import { containsOnlyDigits } from "@utils/strings";
import { jsonStringifyFormData } from "@utils/admin/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Modal } from "@components/modal";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const {
    config,
    allCPUs,
    allDisks,
    allRAMs,
    allGPUs,
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

  const {
    cpuSelection,
    diskSelection,
    ramSelection,
    osSelection,
    uplinkSelection,
    setupCosts,
    monthlyPayments,
  } = useConfiguratorSelection();

  const dispatch = useDispatch();
  const [remarks, setRemarks] = useState();
  const [email, setEmail] = useState();
  const [customer, setCustomer] = useState();
  const [errorMessage, setErrorMessage] = useState({
    email: undefined,
    customer_no: undefined,
  });
  const [showModal, setShowModal] = useState(false)

  const handleCheckout = () => {
    if (cpuSelection === "-") {
      return toast.error("Please select a cpu");
    }
    if (ramSelection === "-") {
      return toast.error("Please select a ram");
    }
    if (osSelection === "-") {
      return toast.error("Please select an OS");
    }
    if (!email) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "Please provide email address",
      }));
    }
    if (!customer) {
      setErrorMessage((prev) => ({
        ...prev,
        customer_no: "Please provide customer number",
      }));
    }
    if (email && customer) {
      // createItem(jsonStringifyFormData(data, jsonFields));
      const data = {
        cpu: cpuSelection,
        disks: diskSelection.map((d) => {
          return {
            quantity: parseInt(d.split(" ")[0]),
            size: d.split(" ")[1],
            unit: `${d.split(" ")[2]} ${d.split(" ")[3]}`,
            storage: d.split(" ")[4],
            is_premium: d.includes('Datacenter') ? true : false
          };
        }),
        customer_email: email,
        customer_no: customer,
        ram: ramSelection,
        os: osSelection,
        uplink: uplinkSelection,
        setup_cost: setupCosts,
        monthly_cost: monthlyPayments,
        discount_level: discount,
        contract_type: contractType,
        contract_duration: contractDuration,
        payment_method: paymentMethod,
        comments: remarks,
      };

      createCheckout(jsonStringifyFormData(data, ["disks"])).then((res) => {
        // toast.success("We have sent you an email with all details of your order. You will get a second email with the invoice as soon as possible.", {
        //   autoClose: false,
        //   // className: 'bottom-10 left-1/2'
        // });
        setShowModal(true)
        setEmail("");
        setCustomer("");
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getConfig());
    dispatch(getAllCPUs());
    dispatch(getAllDisks());
    dispatch(getAllRAMs());
    dispatch(getAllUplinkInventories());
    dispatch(getAllOSs());
    dispatch(getAllGPUs());
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  useEffect(() => {
    if (
      allCPUs.length > 0 &&
      allDisks.length > 0 &&
      allRAMs.length > 0 &&
      allGPUs.length > 0 &&
      Object.values(config).length > 0
    ) {
      const selectedCPU = allCPUs[0];
      // dispatch(selectCPU(selectedCPU));
    }
  }, [allCPUs, allDisks, allRAMs, allGPUs, config]);

  const [loading, setLoading] = useState(true);

  
  return (
    <div className="px-4">
       <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        closeButton={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: "99", width: "450px" }}
      />
      <div className={clsx("fixed left-1/2 top-1/2", !loading && "hidden")}>
        <Spinner className="h-12 w-12 animate-spin" />
      </div>
   {   showModal &&
      <Modal onClose={()=> setShowModal(false)}>
        <div className="flex items-center gap-x-4">
        <CheckCircleIcon className="h-28 w-28 stroke-white fill-green-500"/>
        <p className="text-lg">We have sent you an email with all details of your order. You will get a second email with the invoice as soon as possible.</p>
        </div>
      </Modal>}
      
      <div className={clsx(loading && "hidden")}>
        <Nav />
        <section className="w-full">
          <div className="w-full py-2 bg-gray-50 border border-sky-400 shadow-lg rounded-lg px-4 flex flex-col md:flex-row gap-2">
            <YourSelection />
          </div>
        </section>
        <h2 className="text-2xl text-sky-400 font-bold py-2">Order Details</h2>
        <div className="bg-white-100 border border-sky-400 rounded-lg shadow-sm p-2 py-4">
          <div className="md:grid flex flex-col gap-y-2 md:space-y-0 md:grid-rows-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-2 gap-3">
            <div>
              <h3 className="font-bold text-gray-600 text-lg">Kunden-eMail</h3>
              <input
                type="text"
                value={email}
                className="rounded-md border border-sky-400 px-2 py-2.5 w-full"
                onChange={(event) => {
                  setErrorMessage((prev) => ({ ...prev, email: undefined }));
                  setEmail(event.target.value);
                }}
              />
              {errorMessage.email && (
                <p className="text-red-500 text-xs">{errorMessage.email}</p>
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-600 text-lg">Kunden-Nr</h3>
              <input
                type="text"
                value={customer}
                className="rounded-md border border-sky-400 px-2 py-2.5 w-full"
                onChange={(event) => {
                  if (
                    event.target.value === "" ||
                    containsOnlyDigits(event.target.value)
                  ) {
                    setErrorMessage((prev) => ({
                      ...prev,
                      customer_no: undefined,
                    }));
                    setCustomer(event.target.value);
                  }
                }}
              />
              {errorMessage.customer_no && (
                <p className="text-red-500 text-xs">
                  {errorMessage.customer_no}
                </p>
              )}
            </div>
            <Dropdown
              label="Vertragsart"
              value={contractType}
              options={CONTRACT_TYPE_OPTIONS}
              onChange={(value) => dispatch(setContractType(value))}
            />
            <Dropdown
              label="Bezahlmethode"
              value={paymentMethod}
              options={PAYMENT_METHOD_OPTIONS}
              onChange={(value) => dispatch(setPaymentMethod(value))}
            />
            <div className="order-2 flex items-center flex-col">
              <div
                onClick={handleCheckout}
                className="text-white text-lg w-full text-center cursor-pointer bg-green-500 hover:bg-green-700 font-medium rounded-lg px-5 py-5"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Proceed to Checkout
              </div>
            <p className="italic">By placing an order, you accept the <a className="text-blue-500 underline cursor-pointer" href="https://active-servers.com/agb.php">Terms and conditions</a></p>
            </div>
            <Dropdown
              label="Rabattstufe"
              value={discount}
              options={
                selectedCPU?.special_offer_active
                  ? DISCOUNT_OPTIONS
                  : DISCOUNT_OPTIONS?.filter(
                      (item) => {
                        return item.value != "special_discount"
                      }
                    )
              }
              onChange={(value) => dispatch(setDiscount(value))}
            />
            <Dropdown
              label="Vertragsdauer"
              value={contractDuration}
              options={CONTRACT_DURATION_OPTIONS}
              onChange={(value) => dispatch(setContractDuration(value))}
            />
            <div>
              <h3 className="font-bold text-gray-600 text-lg">Remark</h3>
              <textarea
                name=""
                id=""
                rows="1"
                className="border border-sky-400 py-2.5 rounded-md w-full"
                onChange={(event) => setRemarks(event.target.value)}
                placeholder="Add Remarks"
              ></textarea>
            </div>
          </div>
        </div>

        <h2 className="text-2xl text-sky-400 font-bold py-2">
          Custom Setup Configuration
        </h2>
        <div className="flex flex-col gap-y-2 md:grid grid-cols-3 grid-rows-2 gap-2">
          <div>
            <SelectCPU />
          </div>
          {selectedCPU && (
            <div>
              <SelectDisk />
            </div>
          )}
          {selectedCPU && (
            <section>
              <div className="w-full bg-gray-50 border border-sky-400 shadow-lg rounded-lg">
                <div className="flex flex-col md:flex-row">
                  <SelectRAM />
                </div>
              </div>
            </section>
          )}
          {selectedCPU?.is_gpu_supported && (
            <div>
              <SelectGPU />
            </div>
          )}
          <div>
            <SelectOS />
          </div>
          {contractType !== CONTRACT_TYPE_VALUES.HARDWARE && (
            <div className="max-h-96 overflow-y-auto">
              <SelectUplink />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
