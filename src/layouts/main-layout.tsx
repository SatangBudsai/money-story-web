"use client";

import React, { Fragment, ReactNode } from "react";
import Navbar from "./partial/navbar";
import Footer from "./partial/footer";
import Sidebar from "./partial/sidebar";

type Props = {
  children: ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <Fragment>
      <div className="flex flex-col min-h-[100dvh] w-screen max-w-screen">
        <Navbar />
        <div className="flex flex-col flex-grow px-6 pb-6 max-md:px-5 max-md:pb-5">
          {props.children}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default MainLayout;
