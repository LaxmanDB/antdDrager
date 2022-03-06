import { Upload, Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { DownloadFile } from "../../utils/File";

const { Dragger } = Upload;
function FileUploader({}) {
  const [Files, setFiles] = useState([]);
  function onChange(info) {
    console.log("File s", info);
    setFiles(info.fileList);
  }
  function onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  }

  function handlePreview(fl) {
    console.log("on preview", fl);
    DownloadFile(fl.originFileObj);
  }

  function DownloadAllFiles() {
    console.log("in all downloads", Files);
    var temporaryDownloadLink = document.createElement("a");

    document.body.appendChild(temporaryDownloadLink);

    for (var n = 0; n < Files.length; n++) {
      var download = Files[n].originFileObj;
      DownloadFile(download);
    }
  }
  function DeleteAllFiles() {
    console.log("on preview", Files);
    setFiles([]);
  }
  return (
    <div className="d-flex  align-items-center justify-content-center">
      <div style={{ width: "60%", textAlign: "center" }}>
        <Dragger
          onPreview={handlePreview}
          accept="*"
          name="file"
          multiple={true}
          fileList={Files}
          onChange={onChange}
          onDrop={onDrop}
          // beforeUpload={handleBeforeUpload}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Dragger>
        {Files.length > 1 ? (
          <span className="d-flex justify-content-around">
            <Button onClick={DownloadAllFiles}>Download All</Button>
            <Button onClick={DeleteAllFiles}>Delete All</Button>
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default FileUploader;

/*

const props = {
  name: "file",
  multiple: true,
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};





function onChange(info) {
    console.log("File s", info);
    setFiles(info.fileList);
    // const { status } = info.file;
    // if (status !== "uploading") {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === "done") {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === "error") {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  }



  urls.forEach(function (e) {                
     fetch(e.download)                  
          .then(res => res.blob())                  
          .then(blob => {                    
               saveAs(blob, e.filename);                
          });            
});








*/
