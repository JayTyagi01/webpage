import React from "react";
import about from "../../assets/About.jpeg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We are <br /> <span className="text-Teal">CloudEagle</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            While working at companies like Box, Airbnb, ServiceNow we saw that
            over 40% of the spend is unattended and non-negotiated. A typical
            company has more than 200+ apps, Finance, IT teams are struggling to
            get visibility on the spend, optimize the spend and streamline the
            buying and renewal process. They don’t have the bandwidth nor the,
            tools, data, or expert help to do it on their own. Unmanaged
            environments such as these, tend to overspend by over 30% and have
            chaotic procurement processes. We are here to help companies save
            both time and money !!
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
