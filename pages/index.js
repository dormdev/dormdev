import React from "react";

import Head from "../components/head";
import Global from "../layout/global";
import Header from "../components/header";
import Hero from "../components/hero";

export default () => (
  <>
    <Head />
    <Global>
      <Header />
      <Hero />
    </Global>
  </>
);
