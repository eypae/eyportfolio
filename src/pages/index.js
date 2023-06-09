import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/images/profile/WebsiteBanner.png";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>EnYang | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <Image
                src={profilePic}
                alt="EnYang"
                className="w-full h-auto hidden md:inline-block md:w-full"
                // priority
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              />
              <AnimatedText
                text="Hi, I'm En Yang. Data Analyst, Designer & Doodler."
                className="!text-6xl !text-left !text-indigo-950
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium text-indigo-950 md:text-sm sm:text-xs">
                As a skilled designer, I am dedicated to turning ideas into
                innovative products. Explore my latest projects and digital art
                pieces!
              </p>

              <div className="flex items-center self-start mt-2 lg:justify-center">
                <Link
                  href="https://drive.google.com/file/d/1KZXDzzSLUgLb3IiBc4g51JGiUI-Pzheb/view?usp=sharing"
                  target={"_blank"}
                  className="flex items-center bg-indigo-950 text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-transparent hover:text-dark 
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  
                  md:p-2 md:px-4 md:text-base"
                  download={false}
                >
                  Resume <LinkArrow className={"w-6 ml-1 md:w-3"} />
                </Link>
                <Link
                  href="mailto:enyangpaeey@gmail.com"
                  target={"_blank"}
                  className="ml-6 text-lg font-medium capitalize text-dark underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={profilePic}
                alt="EnYang"
                className="w-full h-auto lg:hidden"
                // priority
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
