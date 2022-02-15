import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import itemData from '../components/ImageData';

export default function ImageListComp() {

  const [fullImage, setFullImage] = useState('');

  function changeImage(img) {
    setFullImage(img);
  }

  return (
    <>
    <Container>
      <center>
        <img
          src={fullImage + '?w=800&fit=crop&auto=format'}
         />
       </center>
    </Container>
    <div style={{width:'100%', height:'300px', bottom:0, position:'fixed', display:'inline-flex', overflow:'scroll', overflowY:'hidden'}}>
      {itemData.map((item) => (
        <div key={item.img} style={{marginLeft:'10px', marginRight:'10px'}} onClick={() => {changeImage(item.img)}}>
          <img
            width={248}
            height={200}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </div>
      ))}
    </div>
    </>
  );
}
