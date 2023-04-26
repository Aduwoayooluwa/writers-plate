import { useState } from "react";

export default function ArticleEditor() {
const [editorValue, setEditorValue] = useState("");

function addFormatting(tag: any) {
const editor: any = document.querySelector("#editor");
const selection: any = window.getSelection();
const range = selection.getRangeAt(0);
const selectedText = range.toString();
const formattedText = `<${tag}>${selectedText}</${tag}>`;
const newElement = document.createElement("span");
newElement.innerHTML = formattedText;
range.deleteContents();
range.insertNode(newElement);
setEditorValue(editor.innerHTML);
}

return (
<div>
    <div className="my-4">
    <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addFormatting("b")}
    >
        Bold
    </button>
    <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addFormatting("p")}
    >
        Normal
    </button>
    <button
        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
        onClick={() => addFormatting("u")}
    >
        Underline
    </button>
    <button
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600"
        onClick={() => addFormatting("i")}
    >
        Italic
    </button>
    </div>

    <div
    id="editor"
    contentEditable="true"
    dangerouslySetInnerHTML={{ __html: editorValue }}
    onInput={(e) => setEditorValue(e.currentTarget.innerHTML)}
    className="w-full h-[500px] p-4 text-lg font-sans outline-none focus:border border-purple-500 rounded-md"
    ></div>
</div>
);
}
