import React from "react";
import './MailComponent.css';
import { Link } from 'react-router-dom';

function Mail(props) {

    const archivesMails = props.mails.map((archivedMail, index) => {
        return (
            <Link key={index} to={`/mails/${index}`} className="mail-body-container">
                <span className="email-from-body">{archivedMail.from}</span>
                <span className="email-to-body">{archivedMail.to}</span>
                <span className="email-sub-body">{archivedMail.subject}</span>
                <span className="email-date-body">{archivedMail.date}</span>
            </Link>
        )
    })
    return (
        <div>
            {archivesMails}
        </div>
    )
}

export default Mail;