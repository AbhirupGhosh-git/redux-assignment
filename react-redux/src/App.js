import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";

import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";

import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />

        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />

        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
