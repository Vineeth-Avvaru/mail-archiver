import React from "react";
import './MailComponent.css';
import { Link } from 'react-router-dom';
import clip_icon from '../icons/icon_clip.svg';
import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import mailIcon from '../icons/icon_mail_sp.svg';
import mobileArrowIcon from '../icons/icon_arrow02.svg';

function Mail(props) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const archivedMails = props.mails.map((archivedMail, index) => {
        let mailMonth = months[parseInt(archivedMail.date.split(" ")[0].split("/")[0])-1];
        let mailDay = archivedMail.date.split(" ")[0].split("/")[1];
        return (
            <div key={index}>
                <div className="hide-mobile">
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
                                ? <span><Badge color="secondary"><FontAwesomeIcon icon={faPlus} /><i className="badge-text">{archivedMail.to.length - 1}</i></Badge></span>
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
                </div>
                <div className="show-mobile">
                    <Link key={index} to={`/mails/${index}`} className="mail-body-container">
                        <div>
                            <div className="non-subject-part">
                                <div className="mail-sp-icon">
                                    <img src={mailIcon} className="mail-icon" alt="mail-icon" />
                                </div>
                                <div className="mobile-from-to-container">
                                    <div className="mobile-email-from">
                                        <div className="email-from-text">
                                            <b>{archivedMail.from}</b>
                                        </div>
                                        <div className="mobile-email-from-date">
                                            <span>
                                                {archivedMail.attachment
                                                    ? <img src={clip_icon} className="icon-clip" alt="icon-clip" />
                                                    : <div></div>
                                                }
                                            </span>
                                            <span className="mobile-email-date">
                                                {mailMonth + " " + mailDay}
                                            </span>
                                            <span>
                                                <img src={mobileArrowIcon} className="arrow-icon" alt="arrow" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mobile-email-to">
                                        <div>
                                            {archivedMail.to[0]}
                                            {archivedMail.to.length !== 1
                                                ? <span>, ... </span>
                                                : <span></span>
                                            }
                                        </div>
                                        <div>
                                            {archivedMail.to.length !== 1
                                                ? <span><Badge color="secondary"><FontAwesomeIcon icon={faPlus} /><i className="badge-text"> {archivedMail.to.length - 1}</i></Badge></span>
                                                : <span></span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {archivedMail.subject}
                        </div>
                    </Link>
                </div>
            </div>
        )
    })
    return (
        <div>
            {archivedMails}
        </div>
    )
}

export default Mail;