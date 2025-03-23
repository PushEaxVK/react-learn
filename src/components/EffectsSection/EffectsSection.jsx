import { useState, useEffect, useCallback } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import useInput from '../../hooks/useInput';

const EffectsSection = () => {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await response.json();
    setUsers(usersData);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
        Open info
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal!</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut
          repudiandae, fugit eum enim alias accusamus cupiditate temporibus
          aperiam sint? Ducimus eligendi in voluptatum et excepturi eaque
          dolorem totam eius?
        </p>
        <Button onClick={() => setModal(false)}>Close modal!</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter(user =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map(user => (
                <li key={user.id} className="way">
                  {user.name}
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default EffectsSection;
