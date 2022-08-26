import React from "react";
import Main from "../components/layouts/main";
import store from "../redux/store";
import { Provider } from "react-redux";
import { changeCardName } from "../redux/card";
import Head from "next/head";

const Index = () => {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
};

export default Index;
