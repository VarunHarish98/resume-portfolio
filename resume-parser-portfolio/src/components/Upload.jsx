import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import Loading from "./Loading";

const Upload = () => {
  const inputFileRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
      setFile(files[0]);
    }
  };

  const handleSendFile = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    let formData = new FormData();
    formData.append("uploadedFile", file);

    try {
      setIsLoading(true);
      const resp = await fetch("http://localhost:3000/retrieve-parsed-data", {
        method: "post",
        body: formData,
      });

      if (resp.ok) {
        setIsLoading(false);
        const result = await resp.json();
        console.log("Upload successful:", result);
        setFileName(null);
        setFile(null);
      } else {
        setIsLoading(false);
        console.error("Upload failed:", resp.statusText);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading file:", error);
    }
  };

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
        name="uploadedFile"
        disabled={isLoading ? true : false}
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
              type="button"
              onClick={handleSendFile} // Trigger file upload
            >
              <span>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
              </span>
              Upload
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
