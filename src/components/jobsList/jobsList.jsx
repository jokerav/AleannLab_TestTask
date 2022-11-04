import { useGetDataQuery } from '../../store/dataApi';
import JobItem from '../jobItem/JobItem';
const JobsList = ()=>{
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  // console.log(data);
return(
  <ul>
    {data.length > 0 && data.map(job =>(<JobItem key={job.id} job={job}/>))}
  </ul>
)}
export default JobsList;
