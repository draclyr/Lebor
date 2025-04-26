import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const LandingSection: React.FC = () => {
    return (
        <section className="text-black dark:text-white p-8 mt-40">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="lg:w-1/2 flex justify-center items-center">
                    <div className="w-60 h-60 flex items-center justify-center">
                        <Image
                            src="/about.jpg"
                            width={500}
                            height={300}
                            alt="About Image"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="mb-6 text-gray-400">
                        I have been a front-end developer for 7 years. Born in Tehran, I am highly
                        skilled in my profession. My goal is to create unique and rare designs in
                        the web field. My skills include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                        {[
                            "Html , Css",
                            "Next.js",
                            "Bootstrap , Tailwind CSS",
                            "JavaScript",
                            "Jquery , React",
                            "Wordpress",
                            "Web Design",
                            "Seo",
                            "ShadCN",
                            "Material UI",
                        ].map((about, index) => (
                            <div key={index} className="flex items-center">
                                <FaCheckCircle className="text-red-500 mr-2" />
                                {about}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="my-8 border-gray-700" />
        </section>
    );
};

export default LandingSection;
