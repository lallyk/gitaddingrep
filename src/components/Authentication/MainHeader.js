import { Fragment } from "react";

import Header from "./Header";

const MainHeader = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={props.className}>{props.children}</main>
    </Fragment>
  );
};

export default MainHeader;
