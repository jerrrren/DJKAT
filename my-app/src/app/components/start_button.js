import React, { useState } from 'react';
import {
    useCurrentGameState,
    useUtilitiesTracker,
    useCurrentScene,
} from "../hooks/stats";

const EpicStartButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const playGame = useCurrentGameState((state) => state.setToPlay);
    const resetUtilities = useUtilitiesTracker((state) => state.reset);
    const resetSceneId = useCurrentScene((state) => state.resetSceneId);

    const handleClick = () => {
        setIsClicked(true);
        playGame();
        resetUtilities();
        resetSceneId();
    };

    return (
        <button
            className={`
        relative overflow-hidden
        px-8 py-4 rounded-full
        bg-gradient-to-r from-indigo-600 to-purple-600
        text-white text-xl font-bold
        transform transition-all duration-300
        ${isHovered ? 'scale-105 animate-glow' : ''}
        hover:shadow-xl
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            onAnimationEnd={() => setIsClicked(false)}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isHovered ? 'animate-pulse' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                START
            </span>

            {/* Background animation effect */}
            <span className={`
        absolute inset-0 
        bg-gradient-to-r from-pink-500 to-indigo-500 
        opacity-0 transition-opacity duration-300
        ${isHovered ? 'opacity-30' : ''}
      `}></span>
        </button>
    );
};

export default EpicStartButton;
