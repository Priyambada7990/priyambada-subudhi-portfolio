import Profile from "../assets/profile.jpg";

const Footer = () => {
    return (
        <footer className="py-8">
            <div className="container mx-auto px-4" id="footer">
                <div className="flex flex-col items-center">
                    <div className="mb-8 ">
                        <img
                            src={Profile}
                            alt="Dr. Priyambada Subudhi"
                            className="w-32 h-32 rounded-full object-contain mx-auto bg-[#F3F4F8]"
                        />
                    </div>
                    <p className="text-center text-gray-600 mb-4 text-2xl font-semibold italic">
                        "The beautiful thing about learning is that no one can take it away from you."
                    </p>
                    <p className="text-center text-gray-600 text-sm">
                        © 2024 Priyambada Subudhi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
