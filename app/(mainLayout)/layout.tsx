

import Footer from "@/components/Footer/Footer";
import Header from "@/components/shared/Header/Header";
// import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Header/> */}
      <div className="min-h-screen">{children}</div>
     {/* <Footer/> */}
    </div>
  );
};

export default layout;
