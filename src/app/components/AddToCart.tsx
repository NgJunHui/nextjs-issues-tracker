"use client";
import React from "react";

const AddToCart = () => {
  const onClick = () => {
    console.log("test");
  };

  return (
    <div>
      <button className="btn btn-primay" onClick={onClick}>
        Add
      </button>
    </div>
  );
};

export default AddToCart;
