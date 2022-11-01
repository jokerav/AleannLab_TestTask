import {useGetDataQuery} from '../store/dataApi';

export const App = () => {
  console.log('App');
  const { data = [], error, isLoading } = useGetDataQuery();
  console.log(data);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
