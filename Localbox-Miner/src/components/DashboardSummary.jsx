const DashboardSummary = ({ records, onClearAll }) => {
  const totalRecords = records.length;
  const totalValue = records.reduce((sum, record) => sum + Number(record.value), 0);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={onClearAll} disabled={records.length === 0}>
        Clear All
      </button>

      <div className="stats">
        <div className="stat">
          <h3>Total Records</h3>
          <p>{totalRecords}</p>
        </div>
        <div className="stat">
          <h3>Total Value</h3>
          <p>{totalValue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;