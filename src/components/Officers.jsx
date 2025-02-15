import * as React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import Instagram icon
import 'swiper/css/pagination';

function Officers() {
    const officers = [
        {
            name: "Norman Bukingolts",
            position: "President",
            linkedin: "https://www.linkedin.com/in/norman-codes/",
            instagram: "https://www.instagram.com/neura.mitblr/", // Add Instagram link
            imgSrc: require('../assets/headshots/Norman+Headshot.jpg'),
            bio: "M.S. in AI Systems '26, University of Florida",
        },
        {
            name: "Alexander Klein",
            position: "Internal Vice President",
            linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
            instagram: "https://www.instagram.com/alexander.klein.cs/", // Add Instagram link
            imgSrc: require('../assets/headshots/Alexander+Headshot.jpg'),
            bio: "Incoming Solutions Engineer @ Deloitte, Former Software Engineer Intern @ Akima",
        },
        {
            name: "Surya Karthikeyan Vijayalakshmi",
            position: "External Vice President",
            linkedin: "https://www.linkedin.com/in/kvsurya/",
            instagram: "https://www.instagram.com/kvsurya/", // Add Instagram link
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
            bio: "Director of Web Development @ University of Florida Homecoming and Gator Growl",
        },
        {
            name: "Jacob Hoppenstedt",
            position: "Secretary",
            linkedin: "https://www.linkedin.com/in/jacob-hoppenstedt/",
            instagram: "https://www.instagram.com/jacob.hoppenstedt/", // Add Instagram link
            imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
            bio: "Former Software Development Engineer Intern @ Publix",
        },
        {
            name: "Connor Munjed",
            position: "Treasurer",
            linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
            instagram: "https://www.instagram.com/connor.munjed/", // Add Instagram link
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ FIS Global",
        },
        {
            name: "Anteneh Zewdie",
            position: "Marketing Lead",
            linkedin: "https://www.linkedin.com/in/antenehzewdie/",
            instagram: "https://www.instagram.com/anteneh.zewdie/", // Add Instagram link
            imgSrc: require('../assets/headshots/Anteneh+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Prevent Overdose Inc.",
        },
        {
            name: "Jack Crew",
            position: "VP of Professional Affairs",
            linkedin: "https://www.linkedin.com/in/jack-crew/",
            instagram: "https://www.instagram.com/jack.crew/", // Add Instagram link
            imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
            bio: "Former Business Development Intern @ TaskUs",
        },
        {
            name: "Alexander Fisher",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/alexander-fisher-00209828a/",
            instagram: "https://www.instagram.com/alexander.fisher/", // Add Instagram link
            imgSrc: require('../assets/headshots/Fisher+Headshot.jpg'),
            bio: "Incoming Software Engineer Intern @ BNY",
        },
        {
            name: "Kovidh Gandreti",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/kovidhgandreti/",
            instagram: "https://www.instagram.com/kovidh.gandreti/", // Add Instagram link
            imgSrc: require('../assets/headshots/Kovidh+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Lockheed Martin Aeronautics",
        },
        {
            name: "Diego Alvarez d Jesus",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/dalvarezdejesus/",
            instagram: "https://www.instagram.com/diego.alvarez.de.jesus/", // Add Instagram link
            imgSrc: require('../assets/headshots/Diego+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Northrop Grumman",
        },
        {
            name: "Rashi Goyal",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/rashi.goyal/", // Add Instagram link
            imgSrc: require('../assets/headshots/RashiG_Neura.png'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Tanay Sanjay",
            position: "Media Team",
            linkedin: "https://www.linkedin.com/in/jasontenczar/",
            instagram: "https://www.instagram.com/tanay.sanjay/", // Add Instagram link
            imgSrc: require('../assets/headshots/Tsm (2).jpg'),
            bio: "Passionate about videography and editing—I make clips cool, question my life choices, and rewatch footage endlessly until it 'feels right.'",
        },
        {
            name: "Arnav Agarwal",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/arnav.agarwal/", // Add Instagram link
            imgSrc: require('../assets/headshots/Arnav_Media.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Shreya Rastogi",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/shreya.rastogi/", // Add Instagram link
            imgSrc: require('../assets/headshots/ShreyaR.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Bhavika",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/bhavika/", // Add Instagram link
            imgSrc: require('../assets/headshots/Bhavika.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Sashia Tuli",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/sashia.tuli/", // Add Instagram link
            imgSrc: require('../assets/headshots/Sashia.png'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Samaira Malik",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/samaira.malik/", // Add Instagram link
            imgSrc: require('../assets/headshots/Samaira.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Riddhi P",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/riddhi.p/", // Add Instagram link
            imgSrc: require('../assets/headshots/Riddhi.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Aaditya Khopade",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/aaditya.khopade/", // Add Instagram link
            imgSrc: require('../assets/headshots/adityaK.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        
        {
            name: "Livana Datta",
            position: "Operations & Logistics Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/livana.datta/", // Add Instagram link
            imgSrc: require('../assets/headshots/Livana.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Adithi Jahnavi",
            position: "Web Development Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/adithi.jahnavi/", // Add Instagram link
            imgSrc: require('../assets/headshots/FullSizeRender - Adithi1.jpg'),
            bio: "Fun, easygoing coder.  Well-written code fixes everything (except my coffee addiction).",
        },
        {
            name: "Aryan Jha",
            position: "Operations & Logistics Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/aryan.jha/", // Add Instagram link
            imgSrc: require('../assets/headshots/Aryan.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
    ];

    const [activeOfficer, setActiveOfficer] = useState(officers[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640 || window.innerHeight < 632);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640 || window.innerHeight < 632);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerClass = isMobile ? 'flexMobile' : 'flexDefault';
    const officerClass = isMobile ? 'officerMobile' : 'officerCard';

    const mobileInfoStyle = isMobile ? { height: '50vh', overflowY: 'auto' } : {};

    return (
        <div className='officerCardBg'>
            <div className={containerClass}>
                <div style={mobileInfoStyle} className="bg-[#0000008e] sm:w-1/2 flex-col items-center justify-center">
                    <h1 className="text-center text-white text-4xl py-4">Meet The Team</h1> {/* Reduced padding */}
                    <div className="text-center">
                        <h2 className="text-5xl gradient-text2 p-3">{activeOfficer.name}</h2>
                        <p className="text-3xl gradient-text1 p-3">{activeOfficer.position}</p>
                        <div className="flex justify-center">
                            <p className="dm-mono text-sm p-3 sm:text-md md:text-lg outline-gray-500 w-5/6 text-center sm:w-1/2">{activeOfficer.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0000008e] pt-4 pb-10 sm:w-1/2"> {/* Reduced padding-top */}
                    <Swiper
                        pagination={true}
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        spaceBetween={30}
                        onSlideChange={(swiper) => setActiveOfficer(officers[swiper.activeIndex])}
                    >
                        {officers.map((officer, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center p-2'> {/* Reduced padding */}
                                    <div className={officerClass}>
                                        <div className="flex flex-col items-center">
                                            <img src={officer.imgSrc} alt={officer.name} className='w-32 h-32 sm:w-48 sm:h-48 rounded-md object-cover mb-2' /> {/* Reduced margin-bottom */}
                                            <h2 className='text-md sm:text-2xl text-white text-center'>{officer.name}</h2>
                                            <div className="flex space-x-2 mt-2">
                                                <a href={officer.linkedin} target="_blank" rel="noreferrer" className='text-4x hover:scale-110 linked-in duration-300 p-2'>
                                                    <FaLinkedin className="text-2xl" />
                                                </a>
                                                <a href={officer.instagram} target="_blank" rel="noreferrer" className='text-4x hover:scale-110 instagram duration-300 p-2'>
                                                    <FaInstagram className="text-2xl" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Officers;