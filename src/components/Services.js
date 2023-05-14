import React from "react";

import { motion } from "framer-motion";

import { BsArrowUpRight } from "react-icons/bs";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium molestiae qui harum.",
    link: "Learn More",
  },
  {
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium molestiae qui harum.",
    link: "Learn More",
  },
  {
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium molestiae qui harum.",
    link: "Learn More",
  },
  {
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium molestiae qui harum.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h1 className="h2 text-accent mb-6">What I Do</h1>
            <h3 className="h3 max-w-[455px] mb-16">
              I am Freelance Web Developer with 5 years of exprience
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </motion.div>
          {/* services  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list  */}
            
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex">
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] font-primary tracking-wider font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end flex-1">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center text-lg"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
