import React, { useState } from 'react';

export default function Background(){
    const [bgText, setBgText] = useState<string>();

    return (
        <>
            <div className="border border-dark w-100 h-100">
                <p>Background do personagem aqui</p>
            </div>
        </>
    )
}