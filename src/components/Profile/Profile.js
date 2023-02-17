//import axios from "axios";
import React, { useRef } from "react";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
//import axios from "axios";
const Profile = () => {
  const name = useRef();
  const url = useRef();
  //const authCtx = useContext(AuthContext);
  //console.log(authCtx.tokenId);
  const token = useSelector((state) => state.auth.token);

  const UpdateHandler = (event) => {
    event.preventDefault();
    //console.log(authCtx.tokenId);
    const EnteredUrl = url.current.value;
    const Enteredname = name.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBjJ44Hszfv0so33A_8ChkkCK1c5iRnFOU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: Enteredname,
          photoUrl: EnteredUrl,
          deleteAttribute: null,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("not working");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <form className={classes.profile}>
      <div className={classes.des}>
        <h3>Winners never Quite,Quitters never Win</h3>
        <h3>
          your profile is 64% completed.A complete profile has higher chances of
          landing a jpb.
        </h3>
      </div>
      <div>
        <h2>Contact Detail</h2>
        <label>Full Name</label>
        <input type="text" ref={name} required />
        <label>Profile Photo URL</label>
        <input type="text" ref={url} required />
      </div>
      <div>
        <button type="submit" onClick={UpdateHandler}>
          Update
        </button>
      </div>
    </form>
  );
};

export default Profile;
