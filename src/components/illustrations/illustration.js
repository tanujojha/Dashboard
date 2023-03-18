import React from 'react';
import "./illustration.css";
import { Link } from "react-router-dom";

function Illustration() {
    let imgurl = "https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg";
  return (
    <div className='illustmaindiv'>
        <h5>This is illust</h5>
        <div className='illustimgdiv'>
            <img className="illustimg" src={imgurl} alt="img illustration"/>
        </div>
        <div className='illustcontdiv'>
            <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
            <Link to="https://undraw.co/">{`Browse Illustrations on unDraw →`} </Link>
        </div>
    </div>
  )
}

export default Illustration