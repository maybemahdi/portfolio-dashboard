'use client'
import { ContextProvider } from '@/lib/MyContextProvider';
import React, { useContext } from 'react';

const Banner = () => {
    const context = useContext(ContextProvider);
    const windowWidth = context ? context.windowWidth : 0;
    const isSmallScreen = windowWidth < 500;
    return (
        <div>
            {isSmallScreen && 'This is a small screen'}
            window Width : {windowWidth}
        </div>
    );
};

export default Banner;