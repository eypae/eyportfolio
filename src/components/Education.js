import React, { use, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[67%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-indigo-950/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Cocurricular = ({ type, time, place, info1, info2, info3, info4 }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[67%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-indigo-950/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">
          {info1} <br />
          {info2} <br />
          {info3} <br />
          {info4} <br />
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="text-indigo-950 font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          md:left-[30px] xs:left-[20px] xs:w-[2px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science (Business Analytics), Honours"
            time="Aug 2020 - May 2024"
            place="National University of Singapore"
            info="Relevant Coursework: Data Structures & Algorithms (Python, Java), Interaction Design, Database Systems, Database Management & Visualisation"
          />
          <Details
            type="GCE 'A' Levels"
            time="Jan 2012 - Oct 2017"
            place="Dunman High School, Singapore"
            info="5 Disctinctions - H2 Mathematics, H2 Economics, H2 Physics, H1 Chemistry, H1 Project Work"
          />
          <Cocurricular
            type="Co-Curricular Activities"
            time="Aug 2020 - May 2024"
            place="National University of Singapore"
            info1="Product Designer • Google Developer Student Club (GDSC NUS)"
            info2="Publicity • NUS Computing Club"
            info3="Brand & Marketing • AIESEC in NUS"
            info4="Analyst • NUS Business Analytics Consulting Team (NUS BACT)"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
