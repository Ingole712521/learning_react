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
import FormParent from "./component/Props/Form/FormParent";
import { NameContext } from './component/Context/starting/MainFile';
import Receiver from "./component/Context/starting/Receiver";
// import { ThemeContext } from "./component/Context/Theme/createContext";
// import ThemeButton from "./component/Context/Theme/ThemeButton";
import ProviderContext from "./component/Context/Increment/ProviderContext";
import Increment from "./component/Context/Increment/Increment";
import { AuthProvider } from "./component/Context/AuthLogin/AuthProvider";
import LoginPage from "./component/Context/AuthLogin/LoginPage";
import { ThemeContext } from "./component/Context/Theme/createContext";
import ThemeButton from "./component/Context/Theme/ThemeButton";
import { ThemeProvider } from "./component/Context/Theme/provideContext";
import Calculation from "./component/useMemo/Calculation";
import ReduckerComponent from "./component/Reducer/Syntax/ReduckerComponent";
import FormComponent from "./component/Reducer/Company/FormComponent";
import Todo from "./component/Reducer/TodoApp/Todo";

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
        <ParentName />
        <ButtonParent />
        <ToggleParent />
        <LeapParent />
        <FormParent />

        <NameContext.Provider value="text from the main file ">
          <Receiver />
        </NameContext.Provider>




        <ProviderContext >
          <Increment />
        </ProviderContext>

        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>

        <AuthProvider>
          <LoginPage />
        </AuthProvider>

<Calculation/>


<ReduckerComponent/>
<FormComponent/>
<Todo/>


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
