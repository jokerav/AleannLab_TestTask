import { Link } from 'react-router-dom';
const JobItem = ({ job })=> {
  const {title, id, createdAt} = job;

  return <li>
    <Link to={`/job/${id}`}>
      <p>{title}</p>
      <p>{createdAt}</p>
      </Link>
  </li>
}
export default JobItem

