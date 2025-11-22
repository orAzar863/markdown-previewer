import React from "react";

const Editor = ({ editorText, onChange }) => {
	return (
		<textarea
			name="editor"
			id="editor"
			value={editorText}
			onChange={onChange}
			style={{ width: "100%", height: "300px", minHeight: "150px", resize: "vertical" }}
		/>
	);
};

export default Editor;
