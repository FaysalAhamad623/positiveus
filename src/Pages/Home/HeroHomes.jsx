
const HeroHomes = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="max-w-[480px] w-full space-y-[35px]">
                <h1 className="text-6xl font-medium leading-[77px]">Navigating the digital landscape for success</h1>
                <p className="text-xl font-normal">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button className="bg-[#191A23] text-white text-xl py-[20px] px-[35px] rounded-[14px]">Book a consultation</button>

            </div>
            <div>
                <img className="max-w-[600px] max-h-[540px]" src="/images/hero-home.png" alt="" />
            </div>
        </div>
    );
};

export default HeroHomes;