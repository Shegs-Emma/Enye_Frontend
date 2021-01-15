import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import classes from './QueryUser.module.css';

const QueryUser = ({ queryItem, users, viewing }) => {
    let theUser = users.filter(user => {
        let foundUser
        if (user.FirstName === queryItem || user.LastName === queryItem) {
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
                    <p onClick={goBack}>RESULTS</p>
                </div>
                <div className={classes.Details}>
                    <div className={classes.Dp}>
                        <div className={classes.Nomen}> <span className={classes.Name}>{`${theUser[0].FirstName} ${theUser[0].LastName}`}</span> <span className={classes.Age}>{`${theUser[0].Gender}`}</span></div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>User Name: </span>{`${theUser[0].UserName}`}</div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>Payment Method: </span>{`${theUser[0].PaymentMethod}`}</div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>URL: </span>{`${theUser[0].URL}`}</div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>Latitude: </span>{`${theUser[0].Latitude}`}</div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>Longitude: </span>{`${theUser[0].Longitude}`}</div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>Mac Address: </span>{`${theUser[0].MacAddress}`}</div>
                        <div className={classes.AddrDiv}><span className={classes.Addr}>Last Login: </span>{`${theUser[0].LastLogin}`}</div>
                    </div>
                    <div className={classes.About}>
                        <div className={classes.Message}>
                            <FontAwesomeIcon icon={faEnvelope} color="#BABDD1" size="1x" />
                            <span>{`${theUser[0].Email}`}</span>
                        </div>
                        
                        <div className={classes.Phone}>
                            <FontAwesomeIcon icon={faPhoneVolume} size="1x" color="#BABDD1" className={classes.Call} />
                            <span>{`${theUser[0].PhoneNumber}`}</span>
                        </div>

                        <div className={classes.Message}>
                            <span>Domain Name</span>
                            <span>{`${theUser[0].DomainName}`}</span>
                        </div>
                        <div className={classes.CreditCardNumber}>
                            <span>Credit Card Number: </span>
                            <span>{`${theUser[0].CreditCardNumber}`}</span>
                        </div>
                        <div className={classes.CreditCardType}>
                            <span>Credit Card Type: </span>
                            <span>{`${theUser[0].CreditCardType}`}</span>
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