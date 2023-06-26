import useMediaQuery from "@/hooks/usedMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import OxFam from "@/assets/OxfamGreen.png";
import STC from "@/assets/SaveTheChildren.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
    
    // BACKGROUND-IMAGE SECTION
    <section id="home" className="gap-16 bg-gray-20 py-10 bg-cover bg-no-repeat before: z-[-1] bg-[url('./assets/Ferhan-in-Ruqi.png')] md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >

                        <div className="relative">

                            <h1 className={`flex text-7xl font-extrabold text-white`}>
                                WISH WELLS
                            </h1>
                            <h2 className={`flex justify-center text-5xl font-medium text-white`}>
                                Find. Built. Grow. Nourish.
                            </h2>

                        </div>
                    

                    <p className="mt-8 text-md text-white">
                        WishWells Programs aids an unheralded democracy in the horn of Africa to discover and build sustainable water wells in an effort maintain an proportionate agricultural yield to stave off famine, poverty, and economic decline.
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Donate Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-extrabold text-white underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

        </motion.div>

        {/* SPONSORS */}
            {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <h3 className="text-lg font-extrabold text-blue underline bg-white flex text-center rounded">The Roble Foundation</h3>
                        <img className="h-[50px] w-[120px] rounded" alt="OxFam" src={OxFam} />
                        <img className="h-[70px] w-[110px] rounded" alt="SaveTheChildren" src={STC} />
                        <h3>African Development Foundation</h3>
                        <h3>Save the Children</h3>
                    </div>
                </div>
            </div>
        )}
    </section>
    );
};

export default Home;