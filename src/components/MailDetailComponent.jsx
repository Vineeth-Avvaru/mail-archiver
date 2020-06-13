import React from "react";
import { Link } from 'react-router-dom';
import "./MailDetailComponent.css";

function MailDetail(props) {
    return(
        <div className="mail-detail-container">
            <Link to="/mails">back</Link>
            {props.mail.subject}
        </div>
    )
}

export default MailDetail;