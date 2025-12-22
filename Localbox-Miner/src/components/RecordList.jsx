import RecordRow from './RecordRow';

const RecordList = ({ records, onDeleteRecord, onStartEdit }) => {
  if (records.length === 0) {
    return <div className="no-records"><p>No records yet</p></div>;
  }

  return (
    <div className="list-container">
      <h2>Records ({records.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Value</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <RecordRow
              key={record.id}
              record={record}
              onDeleteRecord={onDeleteRecord}
              onStartEdit={onStartEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordList;