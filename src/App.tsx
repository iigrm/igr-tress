import React, { ChangeEvent, useEffect, useState } from "react";

import { createBTree } from "./commons/btreeUtils";
import { FetchInput } from "./components/FetchInput/FetchInput";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver";
import { InputArray } from "./interfaces/Input";
import { BTreeGraph } from "./components/BTreeGraph/BTreeGraph";
import "./App.css";

function App() {
  const [fileContent, setFileContent] = useState<string | undefined>("");
  const [jsonResult, setJsonResult] = useState<string>("");
  const [fileSelected, setFileSelected] = useState<string>("");
  const [isValidFile, setIsValidFile] = useState<boolean>(false);

  const [error, setError] = useState<string>("");
  useEffect(() => {
    if (fileContent) {
      try {
        const json: InputArray = JSON.parse(fileContent);
        setJsonResult(JSON.stringify(createBTree(json), null, "\t"));
        setIsValidFile(true);
        setError("");
      } catch (ex) {
        setIsValidFile(false);
        setJsonResult("");
        setError("Error on input content");
      }
    }
  }, [fileContent]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent
  ) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      try {
        const fileReader = new FileReader();
        fileReader.onload = (fileLoadedEvent) => {
          setFileContent(fileLoadedEvent.target?.result?.toString());
        };
        setFileSelected(files[0].name);
        fileReader.readAsText(files[0]);
      } catch (ex) {
        console.warn("No file selected");
      }
    }
  };

  const updateJson = (newValue: string) => {
    try {
      JSON.stringify(JSON.parse(newValue), null, "\t");
      setJsonResult(JSON.stringify(JSON.parse(newValue), null, "\t"));
      setError("");
    } catch (ex) {
      setError("Error invalid json");
      setJsonResult(newValue);
    }
  };

  return (
    <div className="App">
      <h3>Process the input into a tree</h3>
      <FetchInput
        handleChange={handleChange}
        fileSelected={fileSelected}
        isValid={isValidFile}
      />
      <div style={{ display: "flex" }}>
        <div>
          <AceEditor
            mode="json"
            theme="github"
            onChange={updateJson}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            value={jsonResult}
            fontSize={10}
            highlightActiveLine={false}
            wrapEnabled
            showGutter
            tabSize={2}
          />
          {error !== "" && (
            <p>
              Error: <b>{error}</b>
            </p>
          )}
        </div>
        {jsonResult && error === "" && <BTreeGraph input={jsonResult} />}
      </div>
    </div>
  );
}

export default App;
