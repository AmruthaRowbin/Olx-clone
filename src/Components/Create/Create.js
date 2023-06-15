import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../store/Context';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebase from '../../firebase/config';

// import { getStorage, ref, uploadBytes } from 'firebase/storage';

const Create = () => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])
  const [imageDataUrl, setImageDataUrl] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const blob = new Blob([file], { type: file.type });
    setImage(file)
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      setImageDataUrl(url);
    };
    reader.readAsDataURL(blob);
  };

  const firestorage=getStorage(firebase)
  const handleSubmit = () => {

  //   const fileName = image.name;
    console.log(image);
    const storageRef = ref(firestorage, `/images/${image.name}`)
    // 'file' comes from the Blob or File API

  const imageBlob = new Blob([image], {type:image.type});
    uploadBytes(storageRef, imageBlob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    //   const fileName = image.name;
    //   // const imageBlob = new Blob([image], {type: "image/jpeg"});
    //   const imageRef = ref(firestorage, `/images/${fileName}`)
    //   const fileContent = image
    //   console.log(fileContent);
    //   imageRef.putFile(new File(image.size,image.type,image.name))
    // .then(snapshot => {
    //   const downloadURL = snapshot.downloadURL;
    //   console.log(downloadURL,'dddddown');
    //   // Do something with the download URL
    // });
  
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          {/* <form> */}
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}

          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          {/* </form> */}
          <br />
          <img alt="Posts" width="200px" height="200px" src={imageDataUrl ? imageDataUrl : ''}></img>
          {/* <form> */}
          <br />
          <input onChange={handleImageChange} type="file" />
          <br />
          <button
            onClick={handleSubmit}
            className="uploadBtn">upload and Submit</button>
          {/* </form> */}
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
