import React, { Fragment, PropsWithChildren } from "react";
import MainHeader from "./MainHeader";

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
