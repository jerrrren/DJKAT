import React from 'react';
import Image from "next/image";

const Page = () => {
    const teamMembers = [
        { name: "Dillon", role: "Developer" },
        { name: "Jer En", role: "Developer" },
        { name: "Krystal", role: "Art" },
        { name: "Amos", role: "Data" },
        { name: "Tang Hwee", role: "Research" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                {/* Hero Section */}
                <div className="mb-12">
                    <div className="relative mx-auto h-48 w-48 mb-8">
                        <Image 
                            src="/djkat.jpg" 
                            alt="DJ Kat" 
                            className="rounded-full shadow-xl object-cover"
                            fill
                            priority
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Preparing Singapore for Tomorrow
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Empowering Singaporeans to stay resilient during utilities disruptions
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        We are a dedicated group of NUS students committed to helping Singaporeans 
                        prepare for and navigate through potential disruptions in water and electricity 
                        supply. Our goal is to ensure our community remains resilient and well-prepared 
                        for any challenges ahead.
                    </p>
                </div>

                {/* Team Section */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
                    <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center flex-shrink-0">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-xl text-gray-600">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                                <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
