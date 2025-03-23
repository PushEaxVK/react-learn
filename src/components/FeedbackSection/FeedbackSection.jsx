import Button from '../Button/Button';
import './FeedbackSection.css';
import { useState } from 'react';

const FeedbackSection = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('help');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  return (
    <section>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your name</label>
        <input
          className="control"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
          autoComplete="off"
        />

        <label htmlFor="reason">Reson</label>
        <select id="reason" className="control">
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggest</option>
        </select>

        <Button>Send</Button>
      </form>
    </section>
  );
};

export default FeedbackSection;
