import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

const JobItem = ({ job })=> {
  const [rating, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  const {title, id, createdAt, pictures, address} = job;
  console.log(job)

  return <li>
    <Link to={`/job/${id}`}>
      <p>{title}</p>
      <p>{createdAt}</p>
      <img src={pictures[0]} alt="Job title"></img>
      <p>{address}</p>
    </Link>
      <Rating
        onClick={handleRating}
        /* Available Props */
      />

  </li>
}
export default JobItem

