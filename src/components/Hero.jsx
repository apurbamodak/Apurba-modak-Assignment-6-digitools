import { Play } from 'lucide-react';
import bannerPng from "../assets/banner.png"

const Hero = () => {
    return (
        <div className="hero bg-base-200 w-[80%] mx-auto">
            <div className="hero-content flex flex-col md:flex-row gap-5 my-4">

                <div className='space-y-4'>
                    <button className='btn bg-[#E1E7FF] rounded-full p-4'>New: AI-Powered Tools Available</button>
                    <h1 className="text-5xl text-black font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        <br />
                        Explore Products
                    </p>
                    <div>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Explore Products</button>
                        <button className="btn text-[#9514FA] rounded-full"><Play />Watch Demo</button>
                    </div>
                </div>
                <div>
                    <img src={bannerPng} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;