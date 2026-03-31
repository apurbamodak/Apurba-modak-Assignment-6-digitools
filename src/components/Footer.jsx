import instagram from "../assets/Instagram.png"
import facebook from "../assets/Facebook.png"
import fi from "../assets/fi_5968958.png"

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white py-12 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-8">

                <div>
                    <h2 className="text-2xl font-bold mb-3">DigiTools</h2>
                    <p className="text-sm text-white/70">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Product</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Social Links</h3>
                    <div className="flex gap-3 mt-2">
                        <div className="bg-white p-2 rounded-full">
                            <img className="w-5 h-5" src={instagram} alt="" />
                        </div>
                        <div className="bg-white p-2 rounded-full">
                            <img className="w-5 h-5" src={facebook} alt="" />
                        </div>
                        <div className="bg-white p-2 rounded-full">
                            <img className="w-5 h-5" src={fi} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 my-8 max-w-6xl mx-auto"></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4">

                <p>© 2026 DigiTools. All rights reserved.</p>

                <div className="flex gap-4">
                    <p className="cursor-pointer hover:text-white">Privacy Policy</p>
                    <p className="cursor-pointer hover:text-white">Terms of Service</p>
                    <p className="cursor-pointer hover:text-white">Cookies</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;