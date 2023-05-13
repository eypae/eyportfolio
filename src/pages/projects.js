import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import strcorp from "../../public/images/projects/StrCorpCover2.png";
import wmp from "../../public/images/projects/What's My Pet.png";
import drwho from "../../public/images/projects/drwho.png";
import wheresyourmask from "../../public/images/projects/wheresyourmask.png";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border-2 border-solid border-dark bg-light shadow-2xl p-12 relative
    lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark sm:-right-3 sm:h-[102%] sm:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full rounded-lg h-auto hover:scale-105 duration-300"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-indigo-950 sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-indigo-950">{summary}</p>
        <div className="mt-4 flex items-center">
          <motion.a
            href={link}
            target="_blank"
            className="rounded-lg bg-indigo-950 text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            whileHover={{ scale: 0.9 }}
          >
            Visit Project
          </motion.a>
        </div>
      </div>
    </article>
  );
};

const FeaturedProjectGithub = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border-2 border-solid border-dark bg-light shadow-2xl p-12 relative
    lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark sm:-right-3 sm:h-[102%] sm:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full rounded-lg h-auto hover:scale-105 duration-300"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-indigo-950 sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-indigo-950">{summary}</p>
        <div className="mt-4 flex items-center">
          <Link href={github} target="_blank" className="w-10 mr-5 md:w-8">
            <GithubIcon />
          </Link>
          <motion.a
            href={link}
            target="_blank"
            className="rounded-lg bg-indigo-950 text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            whileHover={{ scale: 0.9 }}
          >
            Visit Project
          </motion.a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[1.5rem] bg-dark 
      sm:-right-3 lg:h-[104%] sm:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full rounded-lg h-auto hover:scale-105 duration-300"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-indigo-950 lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-4 w-full flex items-center justify-between underline">
          <motion.a
            href={link}
            target="_blank"
            className="text-lg font-semibold md:text-base"
            whileHover={{ scale: 0.9 }}
          >
            Visit
          </motion.a>
        </div>
      </div>
    </article>
  );
};

export const projects = () => {
  return (
    <>
      <Head>
        <title>EnYang | Projects Page</title>
        <meta name="description" content="EnYang's featured projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="text-indigo-950 mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="My Featured Projects :)"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="StrengthCorp Website"
                img={strcorp}
                summary="Strength Corp is a fitness startup in Singapore specializing in personal training services and digital products for other coaches. I had a free hand in the design and development process with the end goal of establishing a clear, friendly and trustworthy brand presence."
                link="https://info.strengthcorp.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="What's My Pet?"
                img={wmp}
                summary="A user research and UX design project for NUS CS3240 Interaction Design. What's My Pet is an online web platform for users to gain more information about different pets, as well as to join an inclusive community of pet owners. Check out the full project showcase in the link below!"
                link="https://uxfol.io/p/46a6f451/0317002b"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dr. Who"
                img={drwho}
                summary="Dr.Who? provides doctors and nurses the ability to track and manage their patients in the form of a mobile application. View the slide deck to check out my design thinking and research process!"
                link="https://drive.google.com/file/d/1FRY5vsrRnbnCB_7Ej15r7pIbD0LlHAcJ/view?usp=sharing"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjectGithub
                title="Where's Your Mask?"
                img={wheresyourmask}
                summary="Where’s Your Mask? is a PC top-down 2D action shooter set in a virus-plagued Singapore. You play as a safe-distancing ambassador in charge of stopping naughty citizens who refuse to mask up. Made in Unity with C#, all graphics in the game are entirely original and drawn on Photoshop."
                link="https://play.unity.com/mg/other/build-8sm"
                type="Featured Project"
                github="https://github.com/eypae/Orbital"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
