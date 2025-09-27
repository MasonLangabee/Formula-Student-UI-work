import { Provider } from "react-redux";
import LeftNavBar from "./index.jsx";
import store from "../../../store/store.js"

const makeComponent = () => {
    return (
        <Provider store={store} >
            <LeftNavBar/>
        </Provider>
    )
}

export default {
  title: "Left Nav Bar",
  component: makeComponent,
  parameters: {
    width: "100%",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export const Scheme = {
  args: {},
};
