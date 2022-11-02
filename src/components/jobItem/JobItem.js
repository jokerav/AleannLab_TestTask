const JobItem = ({ job })=> {
  const {description} = job;
  return <li>{description}</li>
}
export default JobItem
