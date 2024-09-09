import { ReactImageFilter } from "@ndive/react-image/react";
import React, { useState, useEffect } from "react";

export default function App() {
  return (
    <ReactImageFilter
      src="https://images.unsplash.com/photo-1725615357444-6123528686cf?q=80&w=6016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      width="70%"
    />
  );
}
