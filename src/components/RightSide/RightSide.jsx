import React, { useState } from "react";
import "./RightSide.css";
import FollowersCard from '../FollowersCard/FollowersCard'

import Home from "../../img/home.png";
import Setting from "../../img/setting.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <img src={Setting} alt="" />
        {/* <UilSetting /> */}
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

{/* edited one */}
      <FollowersCard/>
{/* =========== */}
      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
