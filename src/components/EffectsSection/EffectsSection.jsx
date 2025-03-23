import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const EffectsSection = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open info</Button>

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
    </section>
  );
};
export default EffectsSection;
