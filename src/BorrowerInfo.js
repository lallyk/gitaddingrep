import React,{useState} from 'react';
import classes from "./BorrowerInfo.module.css";
const BorrowerInfo=()=>{
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [numberOfUnits, setNumberOfUnits] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Property Name:', propertyName);
    console.log('Property Type:', propertyType);
    console.log('Number of Units:', numberOfUnits);
    console.log('Property Address:', propertyAddress);
    console.log('File:', file);
  };
  return(
    <div> <center>
  <div className={classes.container}>
   
      <h1>Borrower Company Info</h1>
      {/*<div className={classes.formdata}> 
      <label className={classes.formdata}>Property Name:</label>
      <label className={classes.formdata}>Property Type:</label>
      <label className={classes.formdata}>Number of Units:</label></div>*/}
      <form onSubmit={handleFormSubmit}>
        <label className={classes.formdata}>Property Name:</label>
          <input
          type="text"
          className={classes.items}
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
        />
        <div>
        <label className={classes.formdata}>Property Type:</label>
        <select
          className={classes.items}
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Select Property Type</option>
          <option value="Own House">Own House</option>
          <option value="Rented">Rented</option>
        </select></div>
        <br />
        <div>
        <label className={classes.formdata}>Property Type:</label>
        <select
          className={classes.items}
          value={numberOfUnits}
          onChange={(e) => setNumberOfUnits(e.target.value)}
        >
          <option value="">Select Number of Units</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select></div>
        <br />
        <label className={classes.formdata}>Property Address:</label>
        <div>
        <textarea
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
        ></textarea></div>
        <br />
        <label className={classes.formdata}>File Attachment:</label>
        <div className={classes.dotted}>
        <span style={{color:"blue"}}>Browse</span><span> to Attach a File</span>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        /></div>
        <br />
        <button type="reset" className={classes.back}>Back</button>
        <button type="submit" className={classes.continue}>Continue</button>
      </form>
    </div></center></div>)
}
export default BorrowerInfo;