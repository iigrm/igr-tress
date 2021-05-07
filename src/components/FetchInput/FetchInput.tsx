import React from "react";
import { ReactComponent as FileUploadIcon } from "../../assets/file-upload.svg";
import { ReactComponent as OkIcon } from "../../assets/ok.svg";
import { ReactComponent as FailIcon } from "../../assets/fail.svg";
import "./FetchInput.css";
type Props = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  fileSelected: string;
  isValid: boolean;
};
export const FetchInput: React.FC<Props> = (props) => {
  return (
    <div className="fileWrapper">
      <input
        type="file"
        className="fileInput"
        name="fileInput"
        id="fileInput"
        accept="text/plain"
        onChange={props.handleChange}
      />
      <label htmlFor="fileInput">
        <FileUploadIcon className="fileUploadIcon" />
        Choose a file
      </label>
      {props.fileSelected && (
        <div className="fileStatusWrapper">
          <p className="fileName">File selected: {props.fileSelected} </p>
          {props.isValid ? (
            <OkIcon className="fileStatusIcon" />
          ) : (
            <FailIcon className="fileStatusIcon" />
          )}
        </div>
      )}
    </div>
  );
};
