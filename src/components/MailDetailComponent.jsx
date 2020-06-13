import React from "react";
import { Link } from 'react-router-dom';
import "./MailDetailComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function MailDetail(props) {
    return (
        <div className="mail-detail-container">
            <Link to="/mails" className="back-link"> <FontAwesomeIcon icon={faArrowLeft} /><b> back</b></Link>
            <div className="mail-content">
                <div><b>From: </b>{props.mail.from}</div>
                <div><b>To: </b>{props.mail.to.join("; ")}</div>
                <div><b>Date: </b>{props.mail.date}</div>
                <div><b>Subject: </b>{props.mail.subject}</div>
                { props.mail.attachment ? <div><b>Attachments: </b></div> : <div></div>}
                <hr/>
                <div>{props.mail.body}</div>
            </div>
        </div>
    )
}

export default MailDetail;