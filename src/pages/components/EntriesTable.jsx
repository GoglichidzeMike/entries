import './EntriesTable.scss'
import '@/components/shared/ResponseModal.scss';

export const EntriesTable = (props) => {
  const {entries, deleteEntry, isLoading} = props;

  // const handleDelete = value => () => {
  //   deleteEntry(value);
  // }

  return (
      <div className="container table w-full my-10">
        <div className="table-header">
          <div className="w-16 py-2 px-3 text-center border-r border-gray-300">#</div>
          <div className="w-32 py-2 px-3 text-center border-r border-gray-300">Delete</div>

          <div className="w-2/5 py-2 px-3 border-r border-gray-300">Name</div>
          <div className="w-2/5 py-2 px-3 border-r border-gray-300">Email</div>
          <div className="w-1/5 py-2 px-3 border-r border-gray-300">OrderId</div>
          <div className="w-1/5 py-2 px-3 border-r border-gray-300">Pictures</div>
        </div>
        
        <div className="table-body relative">
        {isLoading && <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-50'>
          <div className='loader'></div>
        </div>}
          {entries.map((entry, index) => {
            return <div key={index} className="bg-main flex table-row-el">
              <div className="w-16 py-2 px-3 text-center border-r border-gray-300">{index}</div>
              <div className="w-32 py-2 px-3 text-center border-r border-gray-300"><p className='bg-red-300 rounded text-dark cursor-pointer' onClick={deleteEntry(entry._id)}>Delete</p></div>
              <div className="w-2/5 py-2 px-3 border-r border-gray-300">{entry.name}</div>
              <div className="w-2/5 py-2 px-3 border-r border-gray-300">{entry.email}</div>
              <div className="w-1/5 py-2 px-3 border-r border-gray-300">{entry.orderId}</div>
              <div className="w-1/5 py-2 px-3 border-r border-gray-300"></div>
            </div>
          })}
        </div>
      </div>
  )
}