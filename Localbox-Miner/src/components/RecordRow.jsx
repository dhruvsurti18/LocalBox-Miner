const RecordRow = ({ record, onDeleteRecord, onStartEdit }) => {
  return (
    <tr>
      <td>{record.name}</td>
      <td>{record.category}</td>
      <td>{record.value}</td>
      <td>{record.description || '-'}</td>
      <td>
        <button onClick={() => onStartEdit(record)}>Edit</button>
        <button onClick={() => onDeleteRecord(record.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default RecordRow;