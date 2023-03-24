import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';

import { ProjectType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

import Project from "./Project";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";


const projects: Array<ProjectType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Locate and Access Water from Boreholes",
        description:
            "The ability to locate and drill boreholes to access clean ground water reserves in an environmental safe manner."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Irrigation",
        description:
            "The efficient and effective practice of applying controlled amounts of water to land to help grow crops, landscape plants, and lawns."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Land Husbandry",
        description:
            "The care and management of the land for productive purposes; only through sound land husbandry can the land's productive potential be sustained and enhanced."
    },
];

const container = {
    hidden: {},
    visible: {
        transistion: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const project = ({ setSelectedPage }: Props) => {
    return (
        <section 
            id="project"
            className="mx-auto m-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Project)}
            >
                {/* HEADER */}
                <motion.div 
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}               
                >
                    <HText>WATER IS THE ELIXIR OF LIFE</HText>
                    <p className="my-5 text-sm">
                        Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity
                        Water Wells Charity Water Wells Charity Water Wells Charity Water Wells CharityWater Wells Charity 
                        Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity
                    </p>
                </motion.div>

                {/* PROJECT */}
                <motion.div 
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {projects.map((project: ProjectType) => (
                        <Project 
                            key={project.title}
                            icon={project.icon}
                            title={project.title}
                            description={project.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img 
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        HELP BUILD A LIFE-SUSTAINING {" "}
                                        <span className="text-primary-500">WELL</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay:0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                            Finding water is a daily challenge for young girls, moms and sons. With a charitable donation today, you can lift this burden.
                            Providing a reliable and safe water source will unlock potential by returning time for study, work, and imagination.
                            </p>
                            <p className="mb-5">
                            You'll come alongside our local teams who'll build water wells, small dams, spring protections and other water sources.
                            Then, together, we'll make sure they keep working for years to come, creating opportunity all along the way.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Donate Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default project;