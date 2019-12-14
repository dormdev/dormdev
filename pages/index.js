import React from "react";

import Head from "../components/Head";
import Global from "../layout/Global";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default () => (
  <>
    <Head />
    <Global>
      <Header />
      <Hero />
    </Global>
  </>
);
