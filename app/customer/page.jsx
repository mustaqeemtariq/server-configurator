"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Inventory from "@components/admin/Inventory";

// TODO: Confirm re-routing technique
const Admin = () => {

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
      <Inventory />
    </div>
  );
};

export default Admin;
