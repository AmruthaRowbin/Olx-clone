import React, { useContext } from 'react';

import './View.css';
import Header from '../Header/Header';
import { postContext } from '../../store/postContext';
function View() {
  const {postDetails} = useContext(postContext)
  console.log(postDetails);
  return (
    <>
      <Header />
    { postDetails ?
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
           width="200px" height="300px"
          src={postDetails[0].image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails[0].price} </p>
          <span>{postDetails[0].productName}</span>
          <p>{postDetails[0].category}</p>
          <span>{postDetails[0].CreatedAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
    : <div>No Data Please login</div>  
  }
    </>
  );
}
export default View;
