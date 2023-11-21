import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

export default function Principle({ principle }) {
    return (
        <>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
            <div className="code-container">
                <CodeMirror
                    value={principle.code}
                    indentWithTab={true}
                    theme={okaidia}
                    width="800px"
                    extensions={[javascript({ jsx: true })]}
                />
            </div>
        </>
    )
}