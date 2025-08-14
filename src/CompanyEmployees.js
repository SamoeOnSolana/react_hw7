import React from 'react';

function CompanyEmployees() {
  const company = {
    name: "TechCorp Solutions",
    founded: "2015",
    industry: "Інформаційні технології",
    location: "Київ, Україна",
    description: "Провідна компанія в галузі розробки програмного забезпечення та веб-додатків."
  };

  const employees = [
    {
      id: 1,
      name: "Іван Петренко",
      position: "Генеральний директор",
      department: "Керівництво",
      experience: "8 років",
      salary: "150,000 грн"
    },
    {
      id: 2,
      name: "Марія Коваленко",
      position: "Lead Developer",
      department: "Розробка",
      experience: "6 років",
      salary: "120,000 грн"
    },
    {
      id: 3,
      name: "Олександр Сидоренко",
      position: "UI/UX Designer",
      department: "Дизайн",
      experience: "4 роки",
      salary: "80,000 грн"
    },
    {
      id: 4,
      name: "Анна Мельник",
      position: "Project Manager",
      department: "Управління проектами",
      experience: "5 років",
      salary: "100,000 грн"
    },
    {
      id: 5,
      name: "Дмитро Шевченко",
      position: "QA Engineer",
      department: "Тестування",
      experience: "3 роки",
      salary: "70,000 грн"
    }
  ];

  return (
    <div>
      <h2>завдання 2</h2>
      
      <div style={{ 
        backgroundColor: '#e3f2fd', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px',
        border: '2px solid #2196F3'
      }}>
        <h3 style={{ color: '#1976d2', marginTop: '0' }}>Інформація про компанію</h3>
        <p><strong>Назва:</strong> {company.name}</p>
        <p><strong>Рік заснування:</strong> {company.founded}</p>
        <p><strong>Галузь:</strong> {company.industry}</p>
        <p><strong>Розташування:</strong> {company.location}</p>
        <p><strong>Опис:</strong> {company.description}</p>
      </div>

      <h3 style={{ color: '#388e3c' }}>Список працівників ({employees.length} осіб)</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          borderCollapse: 'collapse',
          width: '100%',
          border: '2px solid #4CAF50',
          backgroundColor: '#f9f9f9'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <th style={{ border: '1px solid #45a049', padding: '12px', textAlign: 'left' }}>ID</th>
              <th style={{ border: '1px solid #45a049', padding: '12px', textAlign: 'left' }}>ПІБ</th>
              <th style={{ border: '1px solid #45a049', padding: '12px', textAlign: 'left' }}>Посада</th>
              <th style={{ border: '1px solid #45a049', padding: '12px', textAlign: 'left' }}>Відділ</th>
              <th style={{ border: '1px solid #45a049', padding: '12px', textAlign: 'left' }}>Досвід</th>
              <th style={{ border: '1px solid #45a049', padding: '12px', textAlign: 'left' }}>Зарплата</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id} style={{ 
                backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0' 
              }}>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{employee.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', fontWeight: 'bold' }}>{employee.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{employee.position}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{employee.department}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{employee.experience}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#2e7d32' }}>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyEmployees;
