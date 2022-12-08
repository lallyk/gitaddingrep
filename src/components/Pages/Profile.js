const Profile = () => {
  return (
    <div>
      <div>
        <h3>Winners never Quite,Quitters never Win</h3>
        <h3>
          your profile is 64% completed.A complete profile has higher chances of
          landing a jpb.
        </h3>
      </div>
      <div>
        <h2>Contact Detail</h2>
        <label>Full Name</label>
        <input type="text" id="name" required />
        <label>Profile Photo URL</label>
        <input type="url" id="url" required />
      </div>
      <div>
        <button type="reset">Update</button>
      </div>
    </div>
  );
};
export default Profile;
