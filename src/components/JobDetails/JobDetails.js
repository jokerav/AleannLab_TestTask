import { useParams, Link } from 'react-router-dom';
const JobDetails = ()=>{
  const {jobId} = useParams();
    return(
    <>
{<Link to='/'>Back</Link>}
      <p>{jobId}</p>
      </>


  )
}
export default JobDetails;

