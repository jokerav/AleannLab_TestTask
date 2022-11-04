import { useParams, Link } from 'react-router-dom';
import {useGetDataQuery} from '../../store/dataApi';

const JobDetails = ()=>{
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  const {jobId} = useParams();
  console.log(data);
  const job = data.filter(job => job.id === jobId);
  return(
    <>
{<Link to='/'>Back</Link>}
      <p>{jobId}</p>
      </>


  )
}
export default JobDetails;

