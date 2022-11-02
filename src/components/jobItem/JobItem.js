import { Link, useLocation } from 'react-router-dom';
const JobItem = ({ job })=> {
  const {description, id} = job;

  return <li>
    <Link to={`/job/${id}`}>
      {description}
      </Link>
  </li>
}
export default JobItem
