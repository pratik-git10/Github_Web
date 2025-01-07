import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bottom-10 mb-10 flex justify-center items-center gap-2">
      <Link href="/">
        <Image
          src="/github.svg"
          alt="logo"
          width={15}
          height={15}
          className="text-center"
        />
      </Link>
      2025 Gitweb, inc. All right reserved.
    </div>
  );
};

export default Footer;
