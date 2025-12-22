import { useState, useEffect } from 'react';
import RecordForm from './components/RecordForm';
import RecordList from './components/RecordList';
import DashboardSummary from './components/DashboardSummary';
import './index.css';

function App() {
  const [records, setRecords] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    const storedRecords = localStorage.getItem('localboxRecords');
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('localboxRecords', JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    const newRecord = { 
      ...record, 
      id: Date.now(),
      createdAt: new Date().toLocaleString()
    };
    setRecords([...records, newRecord]);
  };

  const updateRecord = (updatedRecord) => {
    setRecords(records.map(record => 
      record.id === updatedRecord.id ? updatedRecord : record
    ));
    setEditingRecord(null);
  };

  const deleteRecord = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      setRecords(records.filter(record => record.id !== id));
    }
  };

  const startEdit = (record) => {
    setEditingRecord(record);
  };

  const cancelEdit = () => {
    setEditingRecord(null);
  };

  const clearAllRecords = () => {
    if (window.confirm('Are you sure you want to delete ALL records? This action cannot be undone.')) {
      setRecords([]);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LocalBox Miner</h1>
        <p className="subtitle">Offline Data Management Dashboard</p>
      </header>

      <main className="main-content">
        <div className="dashboard-section">
          <DashboardSummary 
            records={records} 
            onClearAll={clearAllRecords}
          />
        </div>

        <div className="form-section">
          <RecordForm 
            onAddRecord={addRecord}
            onUpdateRecord={updateRecord}
            editingRecord={editingRecord}
            onCancelEdit={cancelEdit}
          />
        </div>

        <div className="list-section">
          <RecordList 
            records={records}
            onDeleteRecord={deleteRecord}
            onStartEdit={startEdit}
          />
        </div>
      </main>
    </div>
  );
}

export default App;