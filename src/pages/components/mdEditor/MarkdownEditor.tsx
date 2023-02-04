import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { MDEditorProps } from "@uiw/react-md-editor";
import React from 'react'

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});



const MarkdownEditor: React.FC<MDEditorProps> = ({ value,onChange}) => {
    return (
        <MDEditor
            
            height={300}
            draggable={true}
            visibleDragbar
            fullscreen={false}
            value={value}
            onChange={onChange}
        />
    );
};
export default MarkdownEditor;


// TODO: MarkdownEditor.Markdown for showing the text