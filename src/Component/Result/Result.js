import React from 'react';
import classes from './Result.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const Result = (props) => {
    const picker = () => {
        props.selected(props.id);
    }

    return (
        <div className={classes.Result}>
            <div className={classes.Photo}>
                {/* <img src={props.profilePic} alt="burger" /> */}
            </div>
            <div className={classes.Details}>
                <h4>{`${props.firstName} ${props.lastName}`}</h4>

                <h5 className={classes.Address}> {`Gender: ${props.gender}`}</h5>

                <div className={classes.IconDiv}>
                    <div className={classes.Email}>
                        <FontAwesomeIcon icon={faEnvelope} size="sm" color="#262A41" className={classes.Env} />
                        <p>{props.email}</p>
                    </div>
                    <div className={classes.Number}>
                        <FontAwesomeIcon icon={faPhoneVolume} size="sm" color="#262A41" className={classes.Call} />
                        <p>{props.phoneNumber}</p>
                    </div>
                    <div className={classes.Right}>
                        <FontAwesomeIcon icon={faArrowRight} size="sm" color="#FCFEFE" className={classes.Search} onClick={picker} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Result;