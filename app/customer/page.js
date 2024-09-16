"use client";

import { useState, useEffect } from "react";

import React from "react";


const page = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    async function fetchCustomers() {
      let res = await fetch("http://localhost:3000/api/customer");
      let data = await res.json();
      setCustomers(data);
    }
    fetchCustomers();
  }, []);

  return (
    <div>
      <h1 className="customer_hading m-4">Customer List</h1>

      <ul>
     
      </ul>
    </div>
  );
};

export default page;
