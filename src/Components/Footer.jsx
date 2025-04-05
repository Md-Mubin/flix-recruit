import Link from "next/link";
import React from "react";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 px-5 md:px-20">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
                    <ul>
                        <li>
                            <h2 className="text-4xl font-bold tracking-widest">Flix
                                <span className="text-black">Recruit</span>
                            </h2>
                        </li>

                        <li>
                            <p className="w-[350px] mt-4 tracking-widest">
                                Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
                            </p>
                        </li>

                        <li>
                            <p className="mt-4 flex gap-10 items-center text-lg">

                                <a href="#" className="hover:text-white text-gray-300 duration-200">
                                    <FaFacebook size={32} />
                                </a>

                                <a href="#" className="hover:text-white text-gray-300 duration-200">
                                    <FaInstagram size={32} />
                                </a>

                                <a href="#" className="hover:text-white text-gray-300 duration-200">
                                    <FaYoutube size={32} />
                                </a>

                                <a href="#" className="hover:text-white text-gray-300 duration-200">
                                    <FaLinkedin size={32} />
                                </a>
                            </p>
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-2">
                        <li>
                            <h3 className="text-2xl font-semibold mb-3 tracking-widest">Quick Links</h3>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Jobs
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                FAQ
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Contacts
                            </Link>
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-2">
                        <li>
                            <h3 className="text-2xl font-semibold mb-3 tracking-widest">Other Pages</h3>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Job Vacancy
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Charity Program
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Privacy & Policy
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-white text-gray-300 duration-200 font-normal text-lg tracking-widest">
                                Terms of Use
                            </Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h3 className="text-2xl font-semibold mb-3 tracking-widest">Contact Us</h3>
                        </li>

                        <li>
                            <p className="flex items-center gap-2 tracking-widest">
                                <FaEnvelope /> support@flixrecruit.com
                            </p>
                        </li>

                        <li>
                            <p className="flex items-center gap-2 mt-2 tracking-widest">
                                <FaPhone className="rotate-x-[-1]" /> + 03248912323424
                            </p>
                        </li>

                        <li>
                            <p className="flex items-center gap-2 mt-2 tracking-widest">
                                <FaMapMarkerAlt /> A108 Adam Street, New York, NY 535022
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 border-t border-gray-400 pt-5 flex flex-col lg:flex-row items-center justify-around tracking-widest">
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
