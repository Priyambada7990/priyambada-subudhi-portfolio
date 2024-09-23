import { FaAward, FaMedal } from 'react-icons/fa';

const Awards = () => {
    return (
        <section id="awards" className="py-24 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-[#1A5319] mb-10 text-center">Awards & Honors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 shadow-md rounded-lg flex items-center flex-row gap-x-4 transition-transform transform hover:scale-105">
                        <FaAward className="text-[#1A5319] text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-[#1A5319]">Springer Student Award</h3>
                            <p className="mt-2 text-gray-700">Received Springer Student Award in PReMI’19</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 shadow-md rounded-lg flex items-center flex-row gap-x-4 transition-transform transform hover:scale-105">
                        <FaMedal className="text-[#1A5319] text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-[#1A5319]">GATE Qualification</h3>
                            <p className="mt-2 text-gray-700">Qualified GATE in 2012 and 2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
