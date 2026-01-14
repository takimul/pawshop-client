import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useColorClasses } from "@/lib/styles";
import Link from "next/link";

const socialLinks = [
  { title: "Facebook", icon: <Facebook size={16} />, href: "#" },
  { title: "Instagram", icon: <Instagram size={16} />, href: "#" },
  { title: "Twitter", icon: <Twitter size={16} />, href: "#" },
  { title: "LinkedIn", icon: <Linkedin size={16} />, href: "#" },
];

export default function TopSocialLinks() {
      const { textPrice } = useColorClasses();
  return (
    <div className="flex items-center gap-4 ml-4">
      {socialLinks.map?.((item) => (
        <Link key={item?.title} href={item?.href} className={`${textPrice} hoverEffect cursor-pointer`} >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
}
