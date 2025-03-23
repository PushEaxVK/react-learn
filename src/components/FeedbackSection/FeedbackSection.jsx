import Button from '../Button/Button';
import './FeedbackSection.css';
import { useState, useRef } from 'react';

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeydown}
      />
    </div>
  );
}

const FeedbackSection = () => {
  const [form, setForm] = useState({
    name: '',
    reason: 'help',
    hasError: false,
  });

  const handleNameChange = event => {
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.length === 0,
    }));
  };

  const handleReasonCHange = event => {
    setForm(prev => ({ ...prev, reason: event.target.value }));
  };

  function toggleError() {
    setForm(prev => ({ ...prev, hasError: !prev.hasError }));
  }

  return (
    <section>
      <h3>Feedback</h3>

      <Button onClick={toggleError} isActive>
        Toggle Error
      </Button>

      <form style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Your name</label>
        <input
          className="control"
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleNameChange}
          autoComplete="off"
          style={{
            border: form.hasError ? '1px solid red' : null,
          }}
        />

        <label htmlFor="reason">Reson</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handleReasonCHange}
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>{JSON.stringify(form, null, 2)}</pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
      </form>
      <hr />

      <StateVsRef />
    </section>
  );
};

export default FeedbackSection;
