import userlogo from "../assets/user.png"
import packageLogo from "../assets/package.png"
import rocketLogo from "../assets/rocket.png"
const Tools = () => {
    return (
        <>
            <div className="bg-base-200 w-[80%] mx-auto flex flex-col items-center text-center space-y-4 mb-7">
                <div>
                    <h2 className="text-3xl font-bold text-black pb-4">Get Started in 3 Steps</h2>
                    <p className="text-sm ">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="card bg-base-100 w-96 shadow-md rounded-2xl relative p-6">

                        <p className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm font-semibold">
                            01
                        </p>
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
                                <img className="w-8" src={userlogo} alt="" />
                            </div>
                            <h2 className="text-xl text-black font-semibold">Create Account</h2>
                            <p className=" text-sm">
                                Sign up for free in seconds. No credit card required to get started.
                            </p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-md rounded-2xl relative p-6">

                        <p className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm font-semibold">
                            02
                        </p>
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
                                <img className="w-8" src={packageLogo} alt="" />
                            </div>
                            <h2 className="text-xl text-black font-semibold">Choose Products</h2>
                            <p className=" text-sm">
                                Browse our catalog and select the toolsthat fit your needs.
                            </p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-md rounded-2xl relative p-6">

                        <p className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm font-semibold">
                            03
                        </p>
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
                                <img className="w-8" src={rocketLogo} alt="" />
                            </div>
                            <h2 className="text-xl text-black font-semibold">Start Creating</h2>
                            <p className=" text-sm">
                                Download and start using your premium tools immediately.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tools;