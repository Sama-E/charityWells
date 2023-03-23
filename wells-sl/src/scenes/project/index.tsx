import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { ProjectType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";

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
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Project = ({ setSelectedPage }: Props) => {
    return (
        <section 
            id="project"
            className="mx-auto m-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Project)}
            >
                {/* HEADER */}
                <div className="md:my-5 md:w-3/5">
                    <HText>WATER IS THE ELIXIR OF LIFE</HText>
                    <p className="my-5 text-sm">
                        Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity
                        Water Wells Charity Water Wells Charity Water Wells Charity Water Wells CharityWater Wells Charity 
                        Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity
                    </p>
                </div>

                {/* PROJECT */}
                <div className="mt-5 items-center justify-between gap-8 md:flex">
                    {projects.map((project) => (
                        <Project />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Project;