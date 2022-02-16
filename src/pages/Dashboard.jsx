import { useState, useEffect } from 'react';
import { getEntries, deleteEntry } from '@/api/dataProvider.js'
import { EntriesTable } from './components/EntriesTable';

const Dashboard = () => {
  const [entriesData, setEntriesData] = useState({data: []})
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setIsLoading(true);
    getEntries()
      .then((response) => {
        setIsLoading(false);
        const { entries = [] } = response;
        setEntriesData({data: entries});
        console.log(entriesData);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error)
      });
  }
  
  const handleDelete = value => async (id) => {

    setIsLoading(true);
    const payload = { id: value}
    deleteEntry(payload)
      .then((response) => {
        setIsLoading(false);
        console.log(response)
        fetchEntries();
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error)
      });
  }

  return (
    <div className='min-h-screen my-10'>
      <h1 className='text-xl text-center'>Entries</h1>
        <EntriesTable 
          entries={entriesData.data}
          deleteEntry={handleDelete}
          isLoading={isLoading}
        />
    </div>
  )
}


export default Dashboard;