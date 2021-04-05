import React from "react";
import Navigation from "../../Components/Navigation/Navigation";

const layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default layout;
