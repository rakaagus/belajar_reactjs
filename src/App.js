import React, {useState, useEffect} from 'react';


const App = () => {
  const [count,setCount] = useState(0);
  const [posts,setPosts] = useState([]);

  const handleIncreament = () => {
    setCount((previous) => previous + 1)
  }

  function handleDecreament() {
    if (count === 0) return;
        setCount(count - 1);
  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => setPosts(json))
  }, []);

  return (
    <div>
      <div>Ini adalah App : {count}</div>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <ul>
        {posts.map((post => <li>{post.title}</li>))}
      </ul>
    </div>
  );
};


export default App;
