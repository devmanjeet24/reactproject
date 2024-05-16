import React from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";

const Post = ({Datasd, bgColor, color}) => {
  return (
    <>
      <div className="post_container" style={{ backgroundColor: bgColor, color: color }}>
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={Datasd.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{Datasd.userName}</h3>
              <p>{Datasd.title}</p>
            </div>
          </div>
          <div className="dot"> <HiDotsVertical /> </div>
        </div>
        <p>{Datasd.description}</p>
        <div className="Post_img">
          <img src={Datasd.mImg} alt="" />
        </div>
        <div className="like_comment">
          <div className="likes"><FaHeart className='items' />{Datasd.like} {" "}K </div>
          <div className="comments"><FaComments className='items' />{Datasd.comment}{" "}K</div>
          <div className="shares"><FaShareSquare className='items' />{Datasd.share}{" "}K</div>
        </div>
      </div>
    </>
  )
}

export default Post;