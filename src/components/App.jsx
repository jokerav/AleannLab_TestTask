import { Routes, Route } from 'react-router-dom';
import JobsList from './jobsList/jobsList';

export const App = () => {
  console.log('App');

  return (
    <Routes>
      <Route exact path="/" element={<JobsList />}></Route>
      {/*<Route path="job/:jobId" element={<JobItem />}></Route>*/}
    </Routes>
  );
};
