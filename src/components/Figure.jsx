"use client";

import React from 'react';
import Image from '@mui/material/Box';
import { addBasePath } from 'next/dist/client/add-base-path';


export default function Figure({src, ...props}) {

    const imageSrc = addBasePath(src);
    
    return (
        <Image component="img" {...props} src={imageSrc} />
    )
}

export { addBasePath }
