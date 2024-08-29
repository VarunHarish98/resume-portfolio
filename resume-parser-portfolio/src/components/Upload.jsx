import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

const Upload = () => {
  const inputFileRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState("");
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
      setFile(files[0]);
      let formData = new FormData();
      formData.append("uploadedFile", file);
      console.log(formData);
      console.log(formData.get("uploadedFile"));
    }
  };
  const handleSendFile = () => {};
  const handleTextClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    } else {
      console.error("File input reference is not set");
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={inputFileRef}
        accept=".pdf"
        className="hidden"
        onChange={handleFileUpload}
      />
      <div
        className="bg-white w-[1000px] h-[250px] flex items-center justify-center -mt-20 border-dashed border-2 border-[#0061ff] cursor-pointer"
        onClick={handleTextClick}
      >
        <div className="flex flex-col gap-2 items-center ">
          <FontAwesomeIcon
            icon={faFileArrowUp}
            size="2xl"
            style={{ color: "#0061ff" }}
          />
          <p className="text-gray-500 font-semibold">Add a File Here or</p>
          <div className=" flex items-center justify-center">
            <Button
              variant="outline"
              className="bg-white gap-2 text-[#0061ff] rounded-lg border-[#0061ff]"
            >
              {" "}
              <span>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
              </span>
              Upload{" "}
            </Button>
          </div>
          <p className="mt-2 text-green-600 font-italics text-sm">
            {fileName ? `Uploaded ${fileName} successfully` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
