import './App.css';
import React, { useState } from "react";

const App = () => {
  const [dropdownValue, setDropdownValue] = useState("My arg");
  const [selectValue, setSelectValue] = useState(undefined);
  const [argumentsList, setArgumentsList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectValue(value === "true");
  };
 const handleAddArgument = () => {
    const newArgument = {
      dropdownValue: "new arg",
      selectValue: "true"
    };

    setArgumentsList([...argumentsList, newArgument]);
    setDropdownValue("select item");
  };

  const handleCancel = () => {
    setDropdownValue("select...");
  };

  let result;
  if (selectValue === true) {
    result = "true";
  } else if (selectValue === false) {
    result = "false";
  } else {
    result = "undefined";
  }
  const renderOptions = () => {
    switch (dropdownValue) {
      case "constant":
        return (
          <><select value={selectValue ? "true" : "false"}
          onChange={handleSelectChange}>
            <option value="true">True</option>
            <option value="false">False</option></select>
          </>
        );
      case "argument":
        return (<><select><option value="arg">My Arg</option>
        <option value="X">X</option></select>
        </>);
      case "and":
        return <><select value="select..." onChange={handleDropdownChange}>
        <option value="select....">select...</option>
        <option value="constant">Constant</option>
        <option value="argument">Argument</option>
        <option value="and">And</option>
        <option value="or">Or</option>
      </select>
      <button onClick={handleCancel}>X</button>
      <br/>
      <select value="select" onChange={handleDropdownChange}>
        <option value="select....">select...</option>
        <option value="constant">Constant</option>
        <option value="argument">Argument</option>
        <option value="and">And</option>
        <option value="or">Or</option>
      </select>
      <button onClick={handleCancel}>X</button>
      <br/>
        </>;
        case "or":
          return <>
          <button onClick={handleButtonClick}>+ op arg</button><br/>
          {showDropdown && (
            <select value="select" onChange={handleDropdownChange}>
              <option value="select....">select...</option>
              <option value="constant">Constant</option>
              <option value="argument">Argument</option>
              <option value="and">And</option>
              <option value="or">Or</option>
            </select>
          )}
        </>
      default:
        return <><select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="select....">select...</option>
        <option value="constant">Constant</option>
        <option value="argument">Argument</option>
        <option value="and">And</option>
        <option value="or">Or</option>
      </select></>
    }
  };

  return (
    <div>
      <select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="select item">Select Item</option>
        <option value="My arg">My arg</option>
        <option value="X">X</option>
      </select>
      <>
        <select
          value={selectValue ? "true" : "false"}
          onChange={handleSelectChange}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        {argumentsList.map((arg, index) => (
          <div key={index}>
            <select>
              <option value="my arg">new arg</option>
              <option value="X">X</option>
            </select>
            <select
              value={selectValue ? "true" : "false"}
              onChange={handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        ))}
           <div><button onClick={handleAddArgument}>+ Add new arg</button></div>
        <br />
        {renderOptions()}&nbsp;&nbsp;

      <button onClick={handleCancel}>X</button>
      </>
      
      <div><br/>Result: {result}</div>
    </div>
  );
};

export default App;
      
