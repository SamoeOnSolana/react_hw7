import React from 'react';

function UniversityFaculty() {
  const faculty = {
    name: "Факультет інформаційних технологій",
    dean: "проф. Петренко І.М.",
    yearFounded: "1995",
    totalStudents: 450,
    totalGroups: 15,
    description: "Підготовка висококваліфікованих спеціалістів у галузі інформаційних технологій, комп'ютерних наук та програмної інженерії."
  };

  const groups = [
    {
      id: 1,
      name: "ІТ-21-1",
      specialty: "Комп'ютерні науки",
      year: 3,
      students: [
        { id: 1, name: "Анна Коваленко", gpa: 4.8, scholarship: true },
        { id: 2, name: "Максим Сидоренко", gpa: 4.2, scholarship: true },
        { id: 3, name: "Юлія Мельник", gpa: 3.9, scholarship: false },
        { id: 4, name: "Денис Шевченко", gpa: 4.5, scholarship: true }
      ]
    },
    {
      id: 2,
      name: "ІТ-22-2",
      specialty: "Програмна інженерія",
      year: 2,
      students: [
        { id: 5, name: "Олена Петренко", gpa: 4.7, scholarship: true },
        { id: 6, name: "Артем Коваль", gpa: 4.1, scholarship: true },
        { id: 7, name: "Ірина Марченко", gpa: 3.8, scholarship: false }
      ]
    },
    {
      id: 3,
      name: "ІТ-23-3",
      specialty: "Кібербезпека",
      year: 1,
      students: [
        { id: 8, name: "Віктор Лисенко", gpa: 4.9, scholarship: true },
        { id: 9, name: "Наталія Романенко", gpa: 4.3, scholarship: true },
        { id: 10, name: "Сергій Ткаченко", gpa: 4.0, scholarship: true },
        { id: 11, name: "Марія Гончаренко", gpa: 3.7, scholarship: false }
      ]
    }
  ];

  return (
    <div>
      <h2>завдання 3</h2>
      
      <div style={{ 
        backgroundColor: '#fff3e0', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px',
        border: '2px solid #FF9800'
      }}>
        <h3 style={{ color: '#e65100', marginTop: '0' }}>Інформація про факультет</h3>
        <p><strong>Назва:</strong> {faculty.name}</p>
        <p><strong>Декан:</strong> {faculty.dean}</p>
        <p><strong>Рік заснування:</strong> {faculty.yearFounded}</p>
        <p><strong>Всього студентів:</strong> {faculty.totalStudents}</p>
        <p><strong>Всього груп:</strong> {faculty.totalGroups}</p>
        <p><strong>Опис:</strong> {faculty.description}</p>
      </div>

      <h3 style={{ color: '#6a1b9a' }}>Групи та студенти</h3>
      {groups.map(group => (
        <div key={group.id} style={{ 
          border: '2px solid #9C27B0', 
          borderRadius: '10px', 
          marginBottom: '20px',
          backgroundColor: '#fafafa'
        }}>
          <div style={{ 
            backgroundColor: '#9C27B0', 
            color: 'white', 
            padding: '15px', 
            borderRadius: '8px 8px 0 0'
          }}>
            <h4 style={{ margin: '0' }}>
              {group.name} - {group.specialty} (рік навчання: {group.year})
            </h4>
          </div>
          
          <div style={{ padding: '15px' }}>
            <h5 style={{ color: '#6a1b9a', marginTop: '0' }}>
              Студенти ({group.students.length} осіб):
            </h5>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                borderCollapse: 'collapse',
                width: '100%',
                border: '1px solid #ddd'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#e1bee7' }}>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ID</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ПІБ</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Середній бал</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Стипендія</th>
                  </tr>
                </thead>
                <tbody>
                  {group.students.map((student, index) => (
                    <tr key={student.id} style={{ 
                      backgroundColor: index % 2 === 0 ? '#fff' : '#f8f8f8' 
                    }}>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.id}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>
                        {student.name}
                      </td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                        {student.gpa}
                      </td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                        {student.scholarship ? '✅' : '❌'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UniversityFaculty;
