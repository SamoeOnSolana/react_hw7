import React, { useState } from 'react';

function MultiplicationTable({ size = 10 }) {
  const [tableSize, setTableSize] = useState(size);

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= tableSize; i++) {
      const row = [];
      for (let j = 1; j <= tableSize; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    return table;
  };

  const table = generateTable();

  return (
    <div>
      <h2>завдання 1</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Розмір таблиці: </label>
        <input 
          type="number" 
          min="1" 
          max="20" 
          value={tableSize} 
          onChange={(e) => setTableSize(parseInt(e.target.value) || 1)}
          style={{ width: '80px', marginLeft: '10px' }}
        />
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          borderCollapse: 'collapse',
          border: '2px solid #333',
          margin: '0 auto',
          backgroundColor: '#f9f9f9'
        }}>
          <thead>
            <tr>
              <th style={{ 
                border: '1px solid #333', 
                padding: '10px', 
                backgroundColor: '#4CAF50', 
                color: 'white',
                minWidth: '50px'
              }}>×</th>
              {Array.from({ length: tableSize }, (_, i) => (
                <th key={i + 1} style={{ 
                  border: '1px solid #333', 
                  padding: '10px', 
                  backgroundColor: '#2196F3', 
                  color: 'white',
                  minWidth: '50px'
                }}>
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <tr key={i + 1}>
                <td style={{ 
                  border: '1px solid #333', 
                  padding: '10px', 
                  backgroundColor: '#FF9800', 
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {i + 1}
                </td>
                {row.map((cell, j) => (
                  <td key={j + 1} style={{ 
                    border: '1px solid #333', 
                    padding: '10px', 
                    textAlign: 'center',
                    backgroundColor: (i + j) % 2 === 0 ? '#fff' : '#f0f0f0'
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MultiplicationTable;
