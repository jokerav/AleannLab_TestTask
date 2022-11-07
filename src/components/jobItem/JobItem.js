import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { differenceInMonths } from 'date-fns'
import {ReactComponent as BookMark} from '../../img/Rectangle 31.svg';
import {ReactComponent as MapStamp} from '../../img/mapStamp.svg';
import './jobItem.scss'
const JobItem = ({ job })=> {
  const [, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }
  const {title, id, createdAt, pictures, address} = job;
  const difference = differenceInMonths(new Date(), new Date(createdAt));
  return <li className='card'>
    <Link to={`/job/${id}`}>

      <img src={pictures[0]} className='picture' alt="Job title"></img>
      <div className='starsContainer'>
        <Rating
        onClick={handleRating}
        className='stars'
        fillColor = '#384564'
        size='10px'
        />
        <p className='timeAgo'>Posted {difference} month ago</p>
      </div>
      <BookMark/>
      <p>{title}</p>
      <p>{createdAt}</p>
      <p>{address}</p>


      <MapStamp height={13}/>
    </Link>


  </li>
}
export default JobItem

