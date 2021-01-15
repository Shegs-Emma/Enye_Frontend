import React from 'react';
import { USER_PER_PAGE } from '../../utils/Constants';
import Result from '../Result/Result';

const Results = ({ users, page, idSetter, showCountry }) => {
    const startIndex = (page - 1) * USER_PER_PAGE;

    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

    const handleSingleUser = (id) => {
        idSetter(id);
    }


    return selectedUsers.map(user => (
        <Result
            key={user.CreditCardNumber}
            firstName={user.FirstName}
            lastName={user.LastName}
            gender={user.Gender}
            email={user.Email}
            id={user.CreditCardNumber}
            creditCardType={user.CreditCardType}
            phoneNumber={user.PhoneNumber}
            selected={handleSingleUser}
        />
    ))
}

export default Results;