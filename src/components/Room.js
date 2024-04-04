import React from 'react';
// link
import { Link } from 'react-router-dom';
// icons
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs'

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return <div className='bg-white shadow-2xl min-h-[500px] group'>

    <div className='overflow-hidden'>
      <img src={image}></img>
    </div>
  </div>;
};

export default Room;
