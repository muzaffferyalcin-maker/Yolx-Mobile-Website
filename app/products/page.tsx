"use client";

import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    console.log("Products");
  }, []);

  return (
    <div>
      <h1>Ürünler & Servisler</h1>
    </div>
  );
}
