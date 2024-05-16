import React from 'react'

const Rightbar = ({datasec, bgColor, color}) => {
  return (
    <>
      <div className='right_container' style={{ backgroundColor: bgColor, color: color }}>
       <div className="postImg">
        <div className="img">
          <img id='_img' src={datasec.img} alt="" />
        </div>
        <div className="inside_img">
          <div className="img">
            <img src={datasec.authorImg} alt="" />
          </div>
          <div className="text">
            <h3>{datasec.authorName}</h3>
            <p>{datasec.authortext}</p>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default Rightbar;