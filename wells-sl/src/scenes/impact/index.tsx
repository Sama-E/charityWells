import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Impact from "./Impact";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image4.png";
import image4 from "@/assets/image5.png";
import image5 from "@/assets/image6.png";


const impacts: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity",
        image: image1,
    },
    {
        name: "Training Classes",
        image: image2,
    },
    {
        name: "Adventure Classes",
        description: "Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity",
        image: image3,
    },
    {
        name: "Rock Climbing Classes",
        image: image4,
    },
    {
        name: "Cycling Classes",
        description: "Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity Water Wells Charity",
        image: image5,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const impact = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="impact"
            className="w-full bg-primary-100 py-40"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Impact)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}  
                >
                    <div className="md:w-3/5">
                        <HText>IMPACT</HText>
                        <ul>
                            <li className="py-3">
                            Wish Wells commitment to local communities continues to build trust and fosters an environment of economic stability, growth and increased opportunities.
                            </li>
                            <li className="py-3">
                            Water Wells provides communities with resilience against droughts, food shortages, climate change and more.
                            </li>
                            <li className="py-3">
                            Wish Wells evaluate community needs and the needs of individuals, and make compassionate investments in water distribution for community use and sanitation purposes.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {impacts.map((item: ClassType, index) => (
                            <Impact 
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>

        </section>
    )
}

export default impact;