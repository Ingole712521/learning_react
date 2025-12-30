import { useState } from "react";

import "../../App.css";
import Product from "../Props/Product";
import ParentName from "../Props/Name/ParentName";
import ButtonParent from "../Props/PassingFunction/ButtonParent";
import ToggleParent from "../Props/toggle/ToggleParent";
import LeapParent from "../Props/leapProps/leapParent";
import FormParent from "../Props/Form/FormParent";
import { NameContext } from "../Context/starting/MainFile";
import Receiver from "../Context/starting/Receiver";
import ProviderContext from "../Context/Increment/ProviderContext";
import Increment from "../Context/Increment/Increment";
import { ThemeProvider } from "../Context/Theme/provideContext";
import ThemeButton from "../Context/Theme/ThemeButton";
import { AuthProvider } from "../Context/AuthLogin/AuthProvider";
import LoginPage from "../Context/AuthContent/LoginPage";
import Calculation from "../useMemo/Calculation";
import ReduckerComponent from "../Reducer/Syntax/ReduckerComponent";
import FormComponent from "../Reducer/Company/FormComponent";
import Todo from "../Reducer/TodoApp/Todo";
import useProduct from "../Product";



function Home() {
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
        <ParentName />
        <ButtonParent />
        <ToggleParent />
        <LeapParent />
        <FormParent />

        <NameContext.Provider value="text from the main file ">
          <Receiver />
        </NameContext.Provider>

        <ProviderContext>
          <Increment />
        </ProviderContext>

        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>

        <AuthProvider>
          <LoginPage />
        </AuthProvider>

        <Calculation />
        <ReduckerComponent />
        <FormComponent />
        <Todo />

       
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

export default Home;
