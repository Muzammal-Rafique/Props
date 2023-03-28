import React from 'react'


export default function ProfileCard(props) {
    const {image,title,handle,desc} = props;
  return (
    <div>
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt='Assistants Images' />
            </div>
            <span className='card-title'>{title}</span>
            <div className='card-title'>{handle}</div>
            <div className='card-content'>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}
