"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Inventory from "@components/admin/Inventory";
import Nav from "@components/admin/Nav";
import { CUSTOMER_NAVIGATION_OPTIONS } from "@utils/constants";
import { Documentation } from "@components/customer/Documentation";

// TODO: Confirm re-routing technique
const Customer = () => {
  const [currentNav, setCurrentNav] = useState(
    CUSTOMER_NAVIGATION_OPTIONS.INVENTORY.name
  );

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/CustomerLogin");
    }
  }, []);

  if (typeof window === undefined) {
    return null;
  }

  return (
    <div>
      <Nav role="Customer" currentNav={currentNav} setCurrentNav={setCurrentNav}/>
      {currentNav === CUSTOMER_NAVIGATION_OPTIONS.INVENTORY.name ? (
      <Inventory role='Customer'/>
      ) : currentNav === CUSTOMER_NAVIGATION_OPTIONS.DOCUMENTATION.name ? (
        <Documentation />
      ) : null}
    </div>
  );
};

export default Customer;
