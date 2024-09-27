import React, { useState } from "react";
import basic from "../assets/basic.png"; // Ensure the path is correct

const Template = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const templates = [{ id: "basic", img: basic }];

  const handleTemplate = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/getData/get-template-data/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const text = await response.text(); // Get the response as plain text
      console.log(text);
      setHtmlContent(text);
      const newTab = window.open("", "_blank");
      if (newTab) {
        // Write HTML content to the new tab
        newTab.document.open();
        newTab.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Template</title>
              <meta charset="UTF-8">
            </head>
            <body>
              ${text}
            </body>
          </html>
        `);
        newTab.document.close();
      } else {
        console.error("Failed to open a new tab");
      }
    } catch (error) {
      console.error("Error fetching template data:", error);
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        {templates.map((template) => (
          <img
            key={template.id}
            src={template.img}
            alt={template.id}
            className="w-20 h-20 cursor-pointer"
            onClick={() => handleTemplate(template.id)}
          />
        ))}
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
    </div>
  );
};

export default Template;
