import "./App.css";
import { ChooseCategory } from "./Category";
import { MyContext } from ".";
import Menu from "./Menu";
import { useState } from "react";
import { Question } from "./Question";
import { Congrats } from "./Congrats";
import React from "react";

export function App() {
  const [state, setState] = useState({ congrats: false });
  return (
    <MyContext.Provider value={{ state, setState }}>
      {state.congrats && <Congrats />}
      <Menu />

      {!(state.category && state.tech) && !state.congrats && <ChooseCategory />}

      {state.category && state.tech && <Question />}
    </MyContext.Provider>
  );
}

export default App;
