import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Profile from "../assets/profile.jpg";

const ContactItem = ({ Icon, text, href }) => (
    <div className="flex items-center gap-x-4 mb-2 font-contact font-semibold group">
        <div className="relative">
            <div className="border-2 border-[#1A5319] p-2 rounded-full transition-transform transform group-hover:scale-110">
                <Icon className="text-[#1A5319] text-lg" style={{ lineHeight: '1.5rem' }} />
            </div>
        </div>
        <a
            href={href}
            className="text-gray-500 text-base font-poppins"
            target={href.startsWith('mailto:') ? '_self' : '_blank'}
            rel={href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
        >
            {text}
        </a>
    </div>
);


const About = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-36">
            <div className="container mt-32 w-[350px] flex flex-col items-center bg-white shadow-lg rounded-2xl mb-16">
                <div className="relative w-full flex justify-center">
                    <div className="absolute -top-24">
                        <div className="w-56 h-56 bg-[#F3F4F8] rounded-full overflow-hidden shadow-md border">
                            <img
                                src={Profile}
                                alt="Dr. Priyambada Subudhi"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-32 p-4 flex flex-col justify-center items-center rounded-lg w-full">
                    <h2 className="text-2xl font-bold mb-1 text-center font-poppins text-gray-800">
                        Dr. Priyambada S
                    </h2>
                    <p className="text-gray-500 text-base mb-8 text-center font-contact font-medium">
                        Assistant Professor
                    </p>

                    <div className="border-t border-gray-300 mb-8 w-full"></div>
                    <div className="flex flex-col gap-3">
                        <ContactItem
                            Icon={MdOutlinePhone}
                            text="+91-8977008531"
                            href="tel:+918977008531"
                        />
                        <ContactItem
                            Icon={MdOutlineEmail}
                            text="priyambada.s@iiits.in"
                            href="mailto:priyambada.s@iiits.in"
                        />
                        <ContactItem
                            Icon={GrLocation}
                            text=" Academic Building (CSE), 2nd floor Room No. 259, Sri City – 517646"
                            href="https://maps.app.goo.gl/sh4rN5dUTo1RunDm7"
                        />

                    </div>
                </div>
            </div>

            <div className="lg:w-[500px] md:w-[700px] w-full px-5 md:px-0 font-poppins">
                <p className="font-bold text-xl text-gray-700 italic">
                    HELLO I'M
                </p>
                <p className="font-bold text-5xl mt-2 text-[#155a14]">
                    Priyambada Subudhi
                </p>

                <p className="mt-5 text-gray-500 font-medium text-md leading-relaxed">
                    An Assistant Professor at the Indian Institute of Information Technology,
                    Sri City. I hold a Ph.D. in Computer Science and Engineering from the Indian Institute of
                    Technology (Indian School of Mines), Dhanbad. My research interests lie in Computer Vision,
                    particularly Image Processing, Image Segmentation, and Machine Learning. I have
                    contributed to the academic community through publications in renowned international journals
                    and conferences. As an educator, I am dedicated to imparting knowledge and expertise in the
                    field of Computer Science.
                </p>
            </div>
        </div>
    );
};

export default About;
