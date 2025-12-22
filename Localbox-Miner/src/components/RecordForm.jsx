import { useState, useEffect } from 'react';

const RecordForm = ({ onAddRecord, onUpdateRecord, editingRecord, onCancelEdit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Personal');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingRecord) {
      setName(editingRecord.name);
      setCategory(editingRecord.category);
      setValue(editingRecord.value);
      setDescription(editingRecord.description || '');
    }
  }, [editingRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }
    
    if (!value.trim()) {
      alert('Please enter a value');
      return;
    }
    
    if (isNaN(value)) {
      alert('Value must be a number');
      return;
    }
    
    if (editingRecord) {
      onUpdateRecord({
        ...editingRecord,
        name: name,
        category: category,
        value: Number(value),
        description: description
      });
    } else {
      onAddRecord({
        name: name,
        category: category,
        value: Number(value),
        description: description
      });
    }
    
    setName('');
    setCategory('Personal');
    setValue('');
    setDescription('');
  };

  const handleCancel = () => {
    setName('');
    setCategory('Personal');
    setValue('');
    setDescription('');
    onCancelEdit();
  };

  return (
    <div className="form-container">
      <h2>{editingRecord ? 'Edit Record' : 'Add New Record'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Value</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description (optional)"
            rows="3"
          />
        </div>

        <div className="button-group">
          {editingRecord ? (
            <>
              <button type="submit">Update</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button type="submit">Add Record</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecordForm;