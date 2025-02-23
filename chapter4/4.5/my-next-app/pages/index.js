import React, { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/hello')
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return (
        <div>
        <h1>Welcome to Next.js 9</h1>
        <p>Message from API: {message}</p>
        </div>
    );
}
