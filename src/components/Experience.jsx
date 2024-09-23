const Experience = () => {
    return (
        <section id="experience" className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-[#1A5319] mb-8 text-center">Experience</h2>
                <div className="relative">
                    <div className="sm:visible invisible absolute border-l-2 border-[#1A5319] h-full left-1/2 transform -translate-x-1/2"></div>
                    <div className="space-y-12">
                        <div className="relative flex items-start group">
                            <div className="sm:visible invisible bg-[#1A5319] w-5 h-5 rounded-full absolute left-1/2 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                            <div className="w-full">
                                <h3 className="text-xl font-semibold text-[#1A5319]">Assistant Professor</h3>
                                <p className="mt-1 text-gray-700 lg:text-base text-sm">Indian Institute of Information Technology, Sri City</p>
                                <p className="mt-1 text-gray-600">September 2021 - Present</p>
                            </div>
                        </div>
                        <div className="relative flex items-start group">
                            <div className="sm:visible invisible bg-[#1A5319] w-5 h-5 rounded-full absolute left-1/2 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                            <div className="w-full">
                                <h3 className="text-xl font-semibold text-[#1A5319]">Assistant Professor</h3>
                                <p className="mt-1 text-gray-700 lg:text-base text-sm">Indian Institute of Information Technology, Kottayam</p>
                                <p className="mt-1 text-gray-600">July 2019 - August 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
