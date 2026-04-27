import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 relative">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right Section */}
                    <div className="flex items-center">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                        >
                            Log in
                        </Link>

                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                        >
                            Get started
                        </Link>

                        {/* Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center p-2 ml-2 text-gray-500 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dropdown Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white shadow-md border-t`}
                >
                    <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
                        
                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/github"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                Github
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}