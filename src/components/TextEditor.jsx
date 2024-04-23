/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useState, useRef } from "react";

const TextEditor = ({ handleChange, value }) => {
  const [loaded, setLoaded] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return (
    loaded && (
      <Editor
        apiKey="h3r0yb4wltqwanftl730o5x9ybrxhz9mxuoeu5keq71mrcyx"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={value}
        onChange={() => handleChange(editorRef.current.getContent())}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    )
  );
};

export default TextEditor;
