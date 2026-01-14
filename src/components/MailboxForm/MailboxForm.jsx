import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'Small',
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner
        <input
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Box Size
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </label>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
