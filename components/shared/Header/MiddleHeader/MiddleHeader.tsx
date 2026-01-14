import Container from "@/components/Container/Container";
import Image from "next/image";
import logo from "@/assets/banner/logo.png";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import MiddleHeaderIcons from "./MiddleHeaderIcons";
import MobileMenu from "../MobileMenu";

function MiddleHeader() {
  return (
    <div className="border-b-[1px] border-b-gray-400 bg-black">
      <Container className="py-2 flex items-center gap-4 md:gap-6 lg:gap-24 justify-between ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-16" />
        </Link>
        <SearchInput />
        {/* user info */}
        <div className="hidden md:inline-flex items-center gap-3">
          <Link href={"/signin"} className="flex items-center gap-2 text-sm">
            <div className="border-2 border-white p-1.5 rounded-full text-xl">
              <LiaUser className="text-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">Hello, Guests</p>
              <p className="text-white">Login / Register</p>
            </div>
          </Link>
         <MiddleHeaderIcons />
        </div>
        <MobileMenu/>
      </Container>
    </div>
  );
}

export default MiddleHeader;
