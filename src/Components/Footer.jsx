import React from "react";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 px-5 md:px-20">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
                    <ul>
                        <li>
                            <h2 className="text-4xl font-bold">Flix
                                <span className="text-black">Recruit</span>
                            </h2>
                        </li>

                        <li>
                            <p className="mt-4 flex gap-4 items-center text-lg">Follow us on:
                                <a href="#" className="hover:text-white text-gray-300 duration-200">
                                    <FaLinkedin size={32} />
                                </a>
                            </p>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
                        </li>

                        <li>
                            <p className="flex items-center gap-2">
                                <FaEnvelope /> support@flixrecruit.com
                            </p>
                        </li>

                        <li>
                            <p className="flex items-center gap-2 mt-2">
                                <FaMapMarkerAlt /> A108 Adam Street, New York, NY 535022 
                            </p>
                        </li>
                    </ul>

                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Newsletter</h3>
                        <p>Sign up for our newsletter and get exclusive updates!</p>
                        <div className="mt-3 flex">
                            <input type="email" placeholder="Enter Your Email" className="p-2 outline-0 border-b" />
                            <button className="bg-white text-blue-700 px-4 rounded-r-md hover:bg-gray-200 cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-400 pt-5 flex flex-col lg:flex-row items-center justify-around">
                    <p>© {new Date().getFullYear()} FlixRecruit. All Rights Reserved.</p>
                    <p className="mt-2">
                        <a href="#" className="hover:underline">Terms & Conditions</a> /
                        <a href="#" className="hover:underline"> Privacy Policy</a> /
                        <a href="#" className="hover:underline"> Imprint</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
