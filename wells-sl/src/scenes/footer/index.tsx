import Logo from "@/assets/Logo.png"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <h1 className={`text-2xl font-mono font-semibold`}>
                        WISHWELLS
                    </h1>
                    <p className="my-5">
                        WishWells Programs aids an unheralded democracy in the horn of Africa to discover and build sustainable water wells in an effort maintain an proportionate agricultural yield to stave off famine, poverty, and economic decline.
                    </p>
                    <p>© Wish Wells All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;