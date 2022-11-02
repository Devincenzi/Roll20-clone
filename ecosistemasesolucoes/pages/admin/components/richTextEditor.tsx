import type { NextPage } from 'next';
import { useState, useRef } from 'react';
import { createEditor } from 'slate';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

const richTextEditor : NextPage = () => {
    const [editor] = useState(() => withReact(createEditor()))

    return (
        <>
        
        </>
    );
}

export default richTextEditor;