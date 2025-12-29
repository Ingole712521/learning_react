import { useState } from "react";

import "./App.css";
import useProduct from "./component/Product";
import Toggle from "./component/useState/Toggle";
import Form from "./component/useState/Form";
import Product from "./component/Props/Product";
import Count from "./component/Props/Count";
import ParentName from "./component/Props/Name/ParentName";
import ButtonParent from "./component/Props/PassingFunction/ButtonParent";
import ToggleParent from "./component/Props/toggle/ToggleParent";
import LeapParent from "./component/Props/leapProps/leapParent";

function App() {
  const { data, isPending, isError, error } = useProduct();

  if (isPending) {
    return (
      <div>
        <h1>Data is Loading ...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h4>{error?.message} || Error in Fetch data</h4>
      </div>
    );
  }
  return (
    <>
      <div className="text-white grid grid-cols-3 gap-4">
        {/* <Toggle /> */}
        {/* <Form /> */}

        <Product />
        <ParentName/>
        <ButtonParent/>
        <ToggleParent/>
        <LeapParent/>




        {/* {data.map((product: any) => {
          return (
            <div
              key={product.id}
              className="flex flex-col items-center border p-4 rounded"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain"
              />
              <h2 className="mt-2 text-center">{product.title}</h2>
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default App;
