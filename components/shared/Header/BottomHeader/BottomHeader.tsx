import Container from "@/components/Container/Container";
import { navigation } from "@/constants/navigation";
import Link from "next/link";

const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400 bg-black">
      <Container className="py-2 flex items-center justify-between">
        <nav className="flex items-center text-xs md:text-sm text-white font-medium gap-3 md:gap-5 ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" hover:text-[#237803] duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/signin"
            className=" hover:text-[#237803] duration-300 hidden md:inline-flex font-medium"
          >
            Please sign-in to view you cart
          </Link>
        </nav>
        {/* <p className="hidden md:inline-flex text-xm font-medium text-gray-400">
          Hotline:  <span className="text-white/80"> +880 1234567890</span>
        </p> */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <p className="hidden md:inline-flex text-white text-sm">Theme</p>
                  <p className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-300">
          Hotline:
          <span className="text-[#8BC34A] font-semibold">
            +880&nbsp;1234567890
          </span>
        </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
