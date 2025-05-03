import style from './App.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [ip, setIp] = useState('');

  async function request() {
    try {
      const response = await axios.get('https://api.ipify.org/?format=json');
      setIp(response.data.ip); 
    } catch (error) {
      console.error('Ошибка при получении IP:', error);
    }
  }
  useEffect(() => {
    request();
  }, []);

  return (
    <div className={style.App}>
      <h1>{ip || 'Загрузка...'}</h1>
      <h3>{ip ? `${ip} ( This is your IP address...probably :P )` : '...'}</h3>
    </div>
  );
}

export default App;