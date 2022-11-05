import { Routes, Route } from 'react-router-dom';
import JobsList from './jobsList/jobsList';
import JobDetails from './JobDetails/JobDetails';

export const App = () => {
    return (
    <Routes>
      <Route exact path="/" element={<JobsList />}></Route>
      <Route path="job/:jobId" element={<JobDetails />}></Route>
    </Routes>
  );
};
