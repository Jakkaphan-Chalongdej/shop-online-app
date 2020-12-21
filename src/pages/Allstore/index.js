import React from "react";

import All from "../../components/ProductsAll";
export default function AllProduct({ component }) {
  return (
    <div>
      <All all={component} />
    </div>
  );
}
