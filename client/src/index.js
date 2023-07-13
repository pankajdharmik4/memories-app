// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers ,compose(applyMiddleware(thunk)))

root.render(
//   <StrictMode>
<Provider store={store}>
    <App />
</Provider>
/* </StrictMode> */
);
