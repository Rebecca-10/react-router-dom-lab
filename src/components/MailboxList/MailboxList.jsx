import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <div>
      {props.mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          <div className="mail-box">
            <h2>Mailbox {mailbox._id}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
