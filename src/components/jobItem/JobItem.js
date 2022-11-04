import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { differenceInMonths } from 'date-fns'
import {ReactComponent as BookMark} from '../../img/Rectangle 31.svg';
import {ReactComponent as MapStamp} from '../../img/mapStamp.svg';

const JobItem = ({ job })=> {
  const [, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }
  const {title, id, createdAt, pictures, address} = job;
  const difference = differenceInMonths(new Date, new Date(createdAt));
  return <li>
    <Link to={`/job/${id}`}>
      <p>{title}</p>
      <p>{createdAt}</p>
      <img src={pictures[0]} alt="Job title"></img>
      <p>{address}</p>
      <BookMark/>
      <p>Posted {difference} month ago</p>
      <MapStamp height={13}/>
    </Link>
      <Rating
        onClick={handleRating}
        /* Available Props */
      />

  </li>
}
export default JobItem

