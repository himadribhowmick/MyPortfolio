import React from 'react';

// --- 1. Custom CSS Variables and Keyframes ---
const CustomStyles = () => (
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
        
        :root {
            --accent: #ff6600;
            --accent-dark: #e25500;
            --text: #111;
            --muted: #666;
        }

        body {
            font-family: 'Poppins', sans-serif;
        }

        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 8px rgba(255, 102, 0, 0.3); opacity: 0.7; }
            50% { box-shadow: 0 0 20px rgba(255, 102, 0, 0.8); opacity: 1; }
        }

        @keyframes blobPulse {
            0%, 100% { transform: scale(1); opacity: 0.08; }
            50%  { transform: scale(1.15); opacity: 0.12; }
        }

        .spinning-gradient-border {
            background: conic-gradient(from 140deg, rgba(255, 102, 0, 0.6), rgba(181, 168, 160, 0.6), rgba(176, 205, 179, 0.95));
            padding: 6px;
            overflow: visible !important; 
        }

        .img-badge {
            top: 30px;
            left: 46%;
            transform: translateX(-50%);
            width: 200px; 
            height: 40px; 
        }
        
        @media (max-width: 900px) {
            .img-badge {
                top: -40px;
                left: 40%;
                transform: translateX(-50%);
            }
            .hero-text-block {
                align-items: center;
                text-align: center;
            }
        }

        @media (min-width: 1024px) {
            .designer-line {
                margin-left: 200px; 
            }
        }
        `}
    </style>
);

// --- 2. Inline SVG Components (Social Icons) ---
const FaFacebookF = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18.1 0H5.9C2.6 0 0 2.6 0 5.9v12.2C0 21.4 2.6 24 5.9 24h6.1v-8.4h-2V12h2v-2.4c0-2.8 1.7-4.4 4.3-4.4 1.3 0 2.6.2 2.6.2v3H16c-1.4 0-1.7.7-1.7 1.6V12h3.2l-.5 3.6h-2.7V24h3.7c3.3 0 5.9-2.6 5.9-5.9V5.9C24 2.6 21.4 0 18.1 0z" /></svg>);
const FaTwitter = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M22.2 5.6c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.3-1.3.6-2 .7-.6-.6-1.5-1-2.5-1-1.8 0-3.3 1.5-3.3 3.3 0 .3 0 .5.1.8-2.7-.1-5.1-1.4-6.8-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1.1-.2-1.6-.4 0 0 0 .1 0 .1 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3.1 2.2-1.1.9-2.5 1.4-4 1.4-.3 0-.6 0-.8-.1 1.4.9 3.1 1.4 4.9 1.4 5.8 0 9-4.8 9-9.1 0-.1 0-.3 0-.4.6-.4 1.2-1 1.6-1.7z" /></svg>);
const FaInstagram = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.7 0 8.3 0 7.2 0H5.8C2.6 0 0 2.6 0 5.8v1.4c0 1.1 0 1.5.1 2.7.1 1.2.2 1.4.2 2.7s-.1 1.5-.1 2.7v1.4c0 3.2 2.6 5.8 5.8 5.8h1.4c1.1 0 1.5 0 2.7.1 1.2.1 1.4.2 2.7.2s1.5-.1 2.7-.2c1.2-.1 1.4-.2 2.7-.2h1.4c3.2 0 5.8-2.6 5.8-5.8v-1.4c0-1.1 0-1.5-.1-2.7-.1-1.2-.2-1.4-.2-2.7s.1-1.5.1-2.7V5.8C24 2.6 21.4 0 18.2 0h-1.4c-1.1 0-1.5 0-2.7.1-1.2.1-1.4.2-2.7.2S13.1.1 12 0zm0 3.6c2.4 0 2.7 0 3.6.1 1 .1 1.4.2 1.9.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.5.3.9.4 1.9.1.9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 1-.2 1.4-.4 1.9-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.5.2-.9.3-1.9.4-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-1-.1-1.4-.2-1.9-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.5-.3-.9-.4-1.9-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6c.1-1 .2-1.4.4-1.9.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.5-.2.9-.3 1.9-.4.9-.1 1.2-.1 3.6-.1zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.4c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zM18.4 5.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9z" /></svg>);
const FaLinkedinIn = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.4 0H3.6C1.6 0 0 1.6 0 3.6v16.8C0 22.4 1.6 24 3.6 24h16.8c2 0 3.6-1.6 3.6-3.6V3.6C24 1.6 22.4 0 20.4 0zM7.2 20.4H3.6V8.4h3.6v12zM5.4 6.8c-1.2 0-2.1-1-2.1-2.1 0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.1c0 1.1-.9 2.1-2.1 2.1zM20.4 20.4h-3.6V14c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6.5h-3.6V8.4h3.4v1.5h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.8v6.5z" /></svg>);

// --- 3. Main Application Component ---
const App = () => {
    const IMAGE_URL = "/images/profile.png";

    return (
        <section 
            id="home" 
            className="relative flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 overflow-hidden p-4 sm:p-10 font-['Poppins'] transition-colors duration-300"
        >
            <CustomStyles />
            
            <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 py-16">
                
                {/* LEFT: TEXT SIDE */}
                <div className="hero-text-block flex flex-col items-center lg:items-start text-center lg:text-left">
                    
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-1">Hi I am</p>
                    <p className="text-xl lg:text-2xl font-bold text-orange-500 mb-2">Muhammad Umair</p>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter uppercase mt-1 mb-4">
                        <span className="block">UI &amp; UX</span>
                        <span className="block designer-line">Designer</span>
                    </h1>

                    <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-lg lg:max-w-md">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
                        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
                        pharetra.
                    </p>

                    <div className="flex items-center gap-6">
                        <a 
                            href="#contact" 
                            className="inline-block bg-[#F88B4C] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-200"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* RIGHT: IMAGE SIDE */}
                <div className="relative flex flex-col items-center justify-center min-h-[700px]">
                    
                    <div className="img-badge absolute bg-orange-500/60 rounded-sm z-50 animate-glow-pulse"></div>

                    <div className="relative w-96 h-96 rounded-[60%]">
                        <div className="spinning-gradient-border w-full h-full rounded-[60%] overflow-visible"> 
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-visible relative transition-colors duration-300"> 
                                <img 
                                    src={IMAGE_URL} 
                                    alt="Muhammad Umair, UI/UX Designer" 
                                    className="absolute h-auto object-cover rounded-full z-10"
                                    style={{ 
                                        width: '800px',
                                        top: '-170px',
                                        borderRadius: '50%',
                                        scale: '1.2',
                                        objectFit: 'contain' 
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-20">
                        <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-900 dark:text-gray-200 rounded-lg hover:text-orange-500 transition duration-200" aria-label="Facebook">
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-900 dark:text-gray-200 rounded-lg hover:text-orange-500 transition duration-200" aria-label="Twitter">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-900 dark:text-gray-200 rounded-lg hover:text-orange-500 transition duration-200" aria-label="Instagram">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 text-gray-900 dark:text-gray-200 rounded-lg hover:text-orange-500 transition duration-200" aria-label="LinkedIn">
                            <FaLinkedinIn className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default App;