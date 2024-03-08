import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const productsData = [
    {
      id: 1,
      // url: '/images/product-1.png',
      url:'https://tse1.mm.bing.net/th/id/OIP.BSivHcUiP8s5z5hlk8he9AHaEz?w=286&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      name: 'Brown eggs',
      description: 'Raw organic brown eggs',
      category: 'dairy',
      price: 'Rs. 100',
      rating: 4.5
    },
    {
      id: 2,
      // url: '/images/product-2.png',
      url: "https://th.bing.com/th?id=OIP.dIS48kcncMqFeZtd2pKVwgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      name: 'Sweet fresh stawberry',
      description: 'Sweet fresh stawberry',
      category: 'fruit',
      price: 'Rs. 150',
      rating: 4.8
    },
    {
      id: 4,
      // url: "/images/orange.png",
      url: "https://th.bing.com/th?id=OIP.xNnG2Q6iw0ZPnvZxgAZd4QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      name: "Fresh orange",
      description: "Fresh orange juice",
      category: "fruit",
      price: "Rs.200",
      rating: 4.6
    },

    {
      id: 5,
      // url: "/images/yogurt.png",
      url: "https://tse2.mm.bing.net/th/id/OIP.7TGwbsMhQ5uwS5ykJRwNKQHaE7?w=298&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Strawberry yogurt",
      description: "Strawberry yogurt with berries",
      category: "dairy",
      price: "Rs. 300",
      rating: 4.4
    },
    {
      id: 6,
      // url: "/images/product-veg.png",
      url: "https://th.bing.com/th?id=OIP.QqEOu8JLMWQ-oIFi2G0XRwHaJ8&w=215&h=289&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      name: "honey",
      description: "pure natural honey",
      category: "pantry",
      price: "Rs. 100",
      rating: 4.5
    },
    {
      id: 7,
      // url: "/images/product-veg.png",
      url: "https://th.bing.com/th?id=OIP.FwD5Z44SmxCYfY7cVg52xQHaGc&w=268&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      name: "curd",
      description: "pure curd",
      category: "dairy",
      price: "Rs. 100",
      rating: 4.5
    },

    {
      id: 7,
      url: "https://www.bing.com/th?id=OIP.BCNFgHhK7KcC-mAblW56xAHaH0&w=243&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      name: "Organic tomato",
      description: "Fresh Organic tomato ",
      category: "vegetables",
      price: "Rs. 150",
      rating: 4.6
    },
    {
      id: 8,
      // url: "/images/product-veg.png",
      url: "https://images.pexels.com/photos/3298064/pexels-photo-3298064.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Basil",
      description: "Fresh basil leaves",
      category: "vegetables",
      price: "Rs. 100",
      rating: 4.5
    },


  ];
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/dashboard"
            element={<Dashboard products={productsData} />} 
          />
        </Routes>
      </div>
    </Router>

  );
}


export default App;
