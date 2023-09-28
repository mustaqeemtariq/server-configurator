"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Inventory from "@components/admin/Inventory";
import Nav from "@components/admin/Nav";
import { ADMIN_NAVIGATION_OPTIONS } from "@utils/constants";
import Config from "@components/admin/Config";

// TODO: Confirm re-routing technique
const Admin = () => {
  const [currentNav, setCurrentNav] = useState(
    ADMIN_NAVIGATION_OPTIONS.INVENTORY.name
  );

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/login");
    }
    else {
      const role = localStorage.getItem("role")
      if (role !== "admin") router.push("/customer")
    }
  }, []);

  if (typeof window === undefined) {
    return null;
  }

  return (
    <div>
      <Nav currentNav={currentNav} setCurrentNav={setCurrentNav} />

      {currentNav === ADMIN_NAVIGATION_OPTIONS.INVENTORY.name ? (
        <Inventory />
      ) : currentNav === ADMIN_NAVIGATION_OPTIONS.CONFIG.name ? (
        <Config />
      ) : null}
    </div>
  );
};

export default Admin;
