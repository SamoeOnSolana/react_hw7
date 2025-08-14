import React from 'react';

function RestaurantMenu() {
  const menu = {
    restaurantName: "Ресторан 'Українська Кухня'",
    address: "вул. Хрещатик, 15, Київ",
    phone: "+380 44 123-45-67",
    sections: [
      {
        id: 1,
        name: "Салати",
        items: [
          {
            id: 1,
            name: "Салат 'Весняний'",
            price: "120 грн",
            ingredients: "огірки, помідори, цибуля, зелень, олія, сіль",
            description: "Свіжий овочевий салат з сезонних овочів"
          },
          {
            id: 2,
            name: "Салат 'Цезар'",
            price: "180 грн",
            ingredients: "куряче філе, салат айсберг, сухарики, пармезан, соус цезар",
            description: "Класичний салат з курячим м'ясом та сиром"
          }
        ]
      },
      {
        id: 2,
        name: "Закуски",
        items: [
          {
            id: 3,
            name: "Холодець",
            price: "90 грн",
            ingredients: "свинина, яловичина, часник, хрін, гірчиця",
            description: "Традиційна українська закуска"
          },
          {
            id: 4,
            name: "Паштет з печінки",
            price: "110 грн",
            ingredients: "куряча печінка, цибуля, морква, вершки, спеції",
            description: "Ніжний паштет з хлібними тостами"
          }
        ]
      },
      {
        id: 3,
        name: "Супи",
        items: [
          {
            id: 5,
            name: "Борщ український",
            price: "140 грн",
            ingredients: "буряк, капуста, картопля, м'ясо, сметана, хліб",
            description: "Традиційний український борщ з пампушками"
          },
          {
            id: 6,
            name: "Суп з грибів",
            price: "130 грн",
            ingredients: "білі гриби, картопля, цибуля, морква, вершки",
            description: "Ароматний грибний суп зі сметаною"
          }
        ]
      },
      {
        id: 4,
        name: "Основні страви",
        items: [
          {
            id: 7,
            name: "Котлета по-київськи",
            price: "220 грн",
            ingredients: "куряче філе, вершкове масло, сухарі, яйце, зелень",
            description: "Класична українська страва з курячим м'ясом"
          },
          {
            id: 8,
            name: "Голубці",
            price: "190 грн",
            ingredients: "капуста, рис, м'ясо, цибуля, морква, сметана",
            description: "Традиційні голубці з м'ясною начинкою"
          }
        ]
      },
      {
        id: 5,
        name: "Десерти",
        items: [
          {
            id: 9,
            name: "Сирники",
            price: "80 грн",
            ingredients: "сир, борошно, яйце, цукор, сметана, варення",
            description: "Традиційні українські сирники з варенням"
          },
          {
            id: 10,
            name: "Медовик",
            price: "95 грн",
            ingredients: "борошно, мед, яйце, вершкове масло, сметана",
            description: "Класичний український торт з медом"
          }
        ]
      }
    ]
  };

  return (
    <div>
      <h2>завдання 4</h2>
      
      <div style={{ 
        backgroundColor: '#f3e5f5', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px',
        border: '2px solid #9C27B0',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#6a1b9a', marginTop: '0' }}>{menu.restaurantName}</h3>
        <p><strong>Адреса:</strong> {menu.address}</p>
        <p><strong>Телефон:</strong> {menu.phone}</p>
      </div>

      <h3 style={{ color: '#d32f2f', textAlign: 'center' }}>Меню ресторану</h3>
      
      {menu.sections.map(section => (
        <div key={section.id} style={{ 
          border: '2px solid #f44336', 
          borderRadius: '10px', 
          marginBottom: '20px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            backgroundColor: '#f44336', 
            color: 'white', 
            padding: '15px', 
            borderRadius: '8px 8px 0 0',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0', fontSize: '1.5em' }}>{section.name}</h4>
          </div>
          
          <div style={{ padding: '15px' }}>
            {section.items.map(item => (
              <div key={item.id} style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '15px', 
                marginBottom: '15px',
                backgroundColor: '#fafafa'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h5 style={{ margin: '0', color: '#d32f2f', fontSize: '1.2em' }}>{item.name}</h5>
                  <span style={{ 
                    backgroundColor: '#4caf50', 
                    color: 'white', 
                    padding: '5px 10px', 
                    borderRadius: '15px',
                    fontWeight: 'bold'
                  }}>
                    {item.price}
                  </span>
                </div>
                
                <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#666' }}>
                  {item.description}
                </p>
                
                <div style={{ 
                  backgroundColor: '#e8f5e8', 
                  padding: '10px', 
                  borderRadius: '5px',
                  border: '1px solid #4caf50'
                }}>
                  <strong style={{ color: '#2e7d32' }}>Інгредієнти:</strong>
                  <p style={{ margin: '5px 0', color: '#388e3c' }}>{item.ingredients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
