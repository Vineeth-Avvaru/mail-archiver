import React from "react";
import './MailComponent.css';
import { Link } from 'react-router-dom';
import clip_icon from '../icons/icon_clip.svg';
import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Mail(props) {

    const archivedMails = props.mails.map((archivedMail, index) => {
        return (
            <Link key={index} to={`/mails/${index}`} className="mail-body-container">
                <span className="email-from-body">{archivedMail.from}</span>
                <span className="email-to-body">
                    {archivedMail.to[0]}
                    {archivedMail.to.length !== 1
                        ? <span>, ... </span>
                        : <span></span>
                    }
                    </span>
                <span className="email-badge-body">
                    {archivedMail.to.length !== 1
                        ? <span><Badge color="secondary"><FontAwesomeIcon icon={faPlus} /><i className="badge-text">{archivedMail.to.length}</i></Badge></span>
                        : <span></span>
                    }
                </span>
                <span className="email-sub-body">{archivedMail.subject}</span>
                <span className="email-attachment-body">
                    {archivedMail.attachment
                        ? <img src={clip_icon} className="icon-clip" alt="icon-clip" />
                        : <div></div>
                    }
                </span>
                <span className="email-date-body">{archivedMail.date}</span>
            </Link>
        )
    })
    return (
        <div>
            {archivedMails}
        </div>
    )
}

export default Mail;