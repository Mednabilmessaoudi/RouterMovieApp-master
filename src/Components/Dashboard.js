import React from "react";
import {GiClick} from " react-icons/bs"


const Dashboard = () => {
  return (
    <div>
      <div className="dash">
        <div class="three">
          <h1>Welcome to Movies House</h1>
          <span>Where you can find any movie you want</span>

          <button> Show me <GiClick></GiClick></button>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
