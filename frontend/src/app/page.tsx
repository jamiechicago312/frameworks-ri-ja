import parentComponent from './parentComponent';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === 'format1') {
      // Warpcast Link
      console.log('Action 1');
    } else if (inputValue === 'format2') {
      // Cast Image Hash
      console.log('Action 2');
    } else {
      // Default action or error handling
      console.log('Invalid format');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input 
      type="text" 
      name="castURL" 
      placeholder="Cast Link"
      value={inputValue}
      onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
