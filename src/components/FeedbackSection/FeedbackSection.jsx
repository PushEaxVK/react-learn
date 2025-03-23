import Button from '../Button/Button';
import './FeedbackSection.css';
import { useState } from 'react';

const FeedbackSection = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('help');
  const [hasError, setHasError] = useState(false);

  const handleNameChange = event => {
    setName(event.target.value);
    setHasError(event.target.value.length === 0);
  };

  const handleReasonCHange = event => {
    setReason(event.target.value);
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
          style={{
            border: hasError ? '1px solid red' : null,
          }}
        />

        <label htmlFor="reason">Reson</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={handleReasonCHange}
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError}>Send</Button>
      </form>
    </section>
  );
};

export default FeedbackSection;
