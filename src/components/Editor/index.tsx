"use client";

import "react-quill/dist/quill.snow.css";

import React, { useEffect, useMemo, useState } from "react";

import dynamic from "next/dynamic";

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
  "size",
  "h1",
];

const Editor = ({ defaultValue }: { defaultValue?: string }) => {
  const [values, setValues] = useState<any>(defaultValue ?? "");

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  return (
    <>
      {ReactQuill && (
        <ReactQuill
          className="w-full h-full"
          theme="snow"
          modules={modules}
          value={values}
          formats={formats}
          onChange={setValues}
        />
      )}
    </>
  );
};
export default Editor;
