import PHD_LOGO from "../assets/phd-logo.png"
import BTECH_LOGO from "../assets/btech-logo.png"

const Education = () => {
    return (
        <section className="py-8 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-[#1A5319] mb-6 text-center">Education</h2>

                <div className="flex justify-start items-center flex-col gap-y-10">
                    <div className="flex gap-x-10 items-start md:w-[750px]">
                        <img
                            src={PHD_LOGO}
                            alt="IIT Dhanbad Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold">Ph.D. in Computer Science and Engineering</h3>
                            <p className="text-gray-700 mt-2">Indian Institute of Technology (Indian School of Mines), Dhanbad</p>
                            <p className="mt-2"><strong>Thesis title:</strong> On Interactive Image Segmentation using Active Contours and Graph Cuts</p>
                            <p className="mt-2 text-gray-500">2015 - 2020</p>
                        </div>
                    </div>

                    <div className="flex gap-x-10 items-start md:w-[750px]">
                        <img
                            src={BTECH_LOGO}
                            alt="BPUT Odisha Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold">Bachelor's in Computer Science</h3>
                            <p className="text-gray-700 mt-2">Biju Pattanaik University of Technology, Odisha</p>
                            <p className="mt-2 text-gray-500">2008 - 2012</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
