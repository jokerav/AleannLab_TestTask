import { Link } from 'react-router-dom';
const JobItem = ({ job })=> {
  const {title, id, createdAt, pictures, address} = job;
  console.log(job)

  return <li>
    <Link to={`/job/${id}`}>
      <p>{title}</p>
      <p>{createdAt}</p>
      <img src={pictures[0]} alt="Job title"></img>
      <p>{address}</p>
      </Link>
  </li>
}
export default JobItem

