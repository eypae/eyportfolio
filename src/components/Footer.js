import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; EY • Singapore</span>
        <div className="flex items-center lg:py-2">
          Built
          {/* with &nbsp;{" "} */}
          {/* <span className="text-primary text-2xl px=1">&#9825;</span> */}
          &nbsp;by&nbsp;
          <Link
            href="https://www.linkedin.com/in/pae-en-yang/"
            className="underline
            underline-offset-4"
            target={"_blank"}
          >
            EnYang
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline
            underline-offset-4 mr-12 lg:mr-0"
        >
          Say hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
