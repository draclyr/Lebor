import { Card } from "@/components/card";
import { MdiGithub } from "@/components/icons/MdiGithub";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import AboutSection from "../components/about/AboutSection";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <a
                    className="fixed left-0 top-0 flex gap-2 p-8 lg:static lg:p-0 text-center justify-center"
                    href="https://github.com/draclyr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdiGithub className="w-6 h-6" />
                    <span className="text-md font-semibold">My Github</span>
                </a>

                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://github.com/draclyr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/logo.svg"
                            alt="logo"
                            width={100}
                            height={21}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className="relative flex place-items-center my-40 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] flex-col">
                <h1 className="text-2xl font-bold text-center text-primary">
                    Hesam Shahmoradi <Highlight>DRACLYR</Highlight>
                </h1>
                <p className="text-center text-lg max-w-[500px] mt-5">
                    WELCOME TO LEBOR PROJECT.
                    <br />
                    🌌project based on (NEXT JS, TYPESCRIPT) which has focused on beautiful and
                    modern design.
                </p>{" "}
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left z-10">
                <Card
                    title="Nexgen"
                    description="💻free template for general use, fast, advanced and compatible with all browsers and platforms."
                    link="https://github.com/draclyr/Nexgen"
                />
                <Card
                    title="Ronic"
                    description="📱A professional project based on important front-end languages."
                    link="https://github.com/draclyr/Ronic"
                />
                <Card
                    title="Liboshop"
                    description="🛍️Shop template with focus on html, css and javascript."
                    link="https://github.com/draclyr/Liboshop"
                />
                <Card
                    title="Idraclyr"
                    description="✅Professional template for corporate and personal topics and resume based on (Next JS, Typescript) which has special features. "
                    link="https://github.com/draclyr/Idraclyr"
                />
            </div>
            <AboutSection />
            <Footer />
        </main>
    );
}
