import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faMobileAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import classes from './QueryUser.module.css';

const QueryUser = ({ queryItem, users, viewing }) => {
    let theUser = users.filter(user => {
        let foundUser
        if (user.name.first === queryItem || user.name.last === queryItem) {
            foundUser = user;
        }
        return foundUser;
    });

    const goBack = () => {
        viewing('')
    };

    let displayQueryUser;

    if (theUser.length > 0) {

        displayQueryUser = (
            <div className={classes.QueryUser}>
                <div className={classes.Results}>
                    <FontAwesomeIcon icon={faArrowLeft} color="#30BBB5" className={classes.Back} />
                    <p onClick={goBack}>Back</p>
                </div>
                <div className={classes.Details}>
                    <div className={classes.Dp}>
                        <img className={classes.Image} src={theUser[0].picture.large} alt="userImage" />
                    </div>
                    <div className={classes.About}>
                        <div> <span className={classes.Name}>{`${theUser[0].name.title}. ${theUser[0].name.first} ${theUser[0].name.last}`}</span> <span className={classes.Age}>{`${theUser[0].dob.age}`}</span></div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>{`${theUser[0].location.street.number} ${theUser[0].location.street.name}, ${theUser[0].location.state} ${theUser[0].location.country}`}</span></div>
                        <div className={classes.Message}>
                            <FontAwesomeIcon icon={faEnvelope} color="#BABDD1" size="1x" />
                            <span>{`${theUser[0].email}`}</span>
                        </div>
                        <div className={classes.Joined}>
                            <span>JOINED: 2002-05-21</span>
                        </div>
                        <div className={classes.Phone}>
                            <FontAwesomeIcon icon={faPhoneVolume} size="1x" color="#BABDD1" className={classes.Call} />
                            <span>{`${theUser[0].cell}`}</span>
                        </div>
                        <div className={classes.Mobile}>
                            <FontAwesomeIcon icon={faMobileAlt} size="1x" color="#BABDD1" className={classes.Mobile} />
                            <span>{`${theUser[0].phone}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (theUser < 1) {
        displayQueryUser = (
            <div className={classes.QueryUser}>
                <div className={classes.Results}>
                    <FontAwesomeIcon icon={faArrowLeft} color="#30BBB5" className={classes.Back} />
                    <p onClick={goBack}>Back</p>
                </div>

                <p className={classes.Empty}>The User does not exist.</p>
            </div>
        )
    }

    return (
        displayQueryUser
    );
}

export default QueryUser;