import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/enyang-pic.PNG";
import buffPic from "../../public/images/profile/enyang-buff.JPG";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>EnYang | About Page</title>
        <meta
          name="description"
          content="En Yang's Portfolio website! Enjoy your time here :)"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 md:!px-0">
          <AnimatedText
            text="I'm a Product Designer working in Sunny Singapore :)"
            className="mb-16 text-indigo-950 !text-7xl !w-[93%] lg:!text-6xl xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 px-20 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:items-center lg:col-span-4 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-indigo-950/75">
                About me
              </h2>
              <p className="font-medium text-indigo-950">
                I am En Yang, a penultimate Business Analytics undergraduate at
                the National University of Singapore. Apart from analytics and
                software development, I am also a UI/UX designer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences.
              </p>
              <p className="my-4 font-medium text-indigo-950">
                My journey in design started over 2 years ago in 2020 when I
                picked up digital art, and since then I have done pieces ranging
                from comics to art design for my very own game!
              </p>
              <p className="font-medium text-indigo-950">
                In my spare time, you will find me doodling on my iPad, playing
                the guitar or working out at the gym.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2
             bg-light border-solid border-dark p-8 dark:bg-dark dark:border-light 2xl:col-span-4 md:order-2
             lg:col-span-4 md:col-span-8"
            >
              <div className="absolute top-1 -right-4 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="EnYangProfile"
                className="w-full h-auto rounded-2xl object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
