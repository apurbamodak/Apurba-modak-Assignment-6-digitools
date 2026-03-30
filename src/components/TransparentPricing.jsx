
const TransparentPricing = () => {
    return (
        <>
            <div className="bg-base-200 w-[80%] mx-auto flex flex-col items-center text-center space-y-4 mb-7">
                <div>
                    <h2 className="text-3xl text-black font-bold pb-4">Simple, Transparent Pricing</h2>
                    <p className="text-sm pb-4">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className="">
                                    <h2 className="text-3xl text-black font-bold">Starter</h2>
                                    <p className="text-sm">Perfect for getting started</p>
                                </div>
                                <h2 className="text-2xl text-black font-bold pt-5">$0/month</h2>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to 10 free tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Basic templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Community support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>1 project per month</span>
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started Free</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning">Most Popular</span>
                                <div className="">
                                    <h2 className="text-3xl text-black font-bold">Premium</h2>
                                    <p className="text-sm text-black">Best for professionals</p>
                                </div>
                                <h2 className="text-2xl text-black font-bold pt-5">$29/month</h2>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-black">Access to all premium tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-black">Unlimited templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-black">Priority support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-black">Unlimited projects</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-black">Cloud syncs</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-black">Advanced analytics</span>
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <button className="btn w-full rounded-full">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 text-black shadow-sm">
                            <div className="card-body">
                                <div className="">
                                    <h2 className="text-3xl font-bold">Enterprise</h2>
                                    <p className="text-sm">For teams and businesses</p>
                                </div>
                                <h2 className="text-2xl pt-5">$99/month</h2>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Team collaboration</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom integrations</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>SLA guarantee</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom branding</span>
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Start Pro Trial</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TransparentPricing;