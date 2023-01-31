import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";


const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
});
function MarkdownEditor() {
    return (
        <MDEditor
            value="Hello Markdown!"
            height={300}
            draggable={true}
            visibleDragbar
            fullscreen={false}
        />
    );
}

export default MarkdownEditor;


// TODO: MarkdownEditor.Markdown for showing the text