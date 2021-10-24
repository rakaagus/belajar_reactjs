import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';


const App = () => {
  const [count,setCount] = useState(0);
  const [posts,setPosts] = useState([]);
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div style={{
        backgroundColor: "red",
      }}>Ini adalah App : {count}</div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <button onClick={handleIncreament} className="btn btn-primary">Increament</button>
      <button onClick={handleDecreament} className="button-oke">Decreament</button>
      <ul>
        {posts.map((post => <li>{post.title}</li>))}
      </ul>
      {/* Modal section */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal section */}
    </div>
  );
};


export default App;
