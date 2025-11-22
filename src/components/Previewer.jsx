import React from "react";

const Previewer = ({ previewerText }) => {
    if (window.marked) window.marked.setOptions({ breaks: true });
    return (
        <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: window.marked ? window.marked.parse(previewerText) : "" }}
        ></div>
    );
};

export default Previewer;
