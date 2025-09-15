"use client";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ reset }: ErrorProps) => {
  return (
    <>
      <div>ErrorPage</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
