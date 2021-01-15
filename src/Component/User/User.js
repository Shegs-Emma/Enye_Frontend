import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import classes from './User.module.css';

const User = ({ selectedUserId, users, viewing }) => {
    let theUser = users.filter( user => user.CreditCardNumber === selectedUserId);


    const goBack = () => {
        viewing(false)
    }

    return (
        <div className={classes.User}>
            <div className={classes.Results}>
                <FontAwesomeIcon icon={faArrowLeft} color="#30BBB5" className={classes.Back} />
                <p onClick={goBack}>RESULTS</p>
            </div>
            <div className={classes.Details}>
                <div className={classes.Dp}>
                    <div className={classes.Nomen}> <span className={classes.Name}>{`${theUser[0].FirstName} ${theUser[0].LastName}`}</span> <span className={classes.Age}>{`${theUser[0].Gender}`}</span></div>
                    <div className={classes.AddrDiv}><span className={classes.Addr}>{`Lattitude: ${theUser[0].Latitude}, Longitude: ${theUser[0].Longitude}, MacAddress: ${theUser[0].MacAddress}`}</span></div>
                </div>
                <div className={classes.About}>
                    <div className={classes.Mobile}>
                        <span>UserName</span>
                        <span>{`${theUser[0].UserName}`}</span>
                    </div>

                    <div className={classes.Mobile}>
                        <span>URL</span>
                        <span>{`${theUser[0].URL}`}</span>
                    </div>

                    <div className={classes.Mobile}>
                        <span>Last Login</span>
                        <span>{`${theUser[0].LastLogin}`}</span>
                    </div>

                    <div className={classes.Mobile}>
                        <span>Payment Method</span>
                        <span>{`${theUser[0].PaymentMethod}`}</span>
                    </div>
                    
                    <div className={classes.Message}>
                        <FontAwesomeIcon icon={faEnvelope} color="#BABDD1" size="1x" />
                        <span>{`${theUser[0].Email}`}</span>
                    </div>
                    <div className={classes.Message}>
                        <span>Domain Name</span>
                        <span>{`${theUser[0].DomainName}`}</span>
                    </div>
                    <div className={classes.Joined}>
                        <span>Credit Card Number: </span>
                        <span>{`${theUser[0].CreditCardNumber}`}</span>
                    </div>
                    <div className={classes.Joined}>
                        <span>Credit Card Type: </span>
                        <span>{`${theUser[0].CreditCardType}`}</span>
                    </div>
                    <div className={classes.Phone}>
                        <FontAwesomeIcon icon={faPhoneVolume} size="1x" color="#BABDD1" className={classes.Call} />
                        <span>{`${theUser[0].PhoneNumber}`}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default User;