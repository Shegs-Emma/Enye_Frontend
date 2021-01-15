import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Results from '../../Component/Results/Results';
import User from '../../Component/User/User';
import QueryUser from '../../Component/QueryUser/QueryUser';

configure({adapter: new Adapter()});

describe('<Results />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Results users={
            [
                {firstName: 'Emmanuel', login: {uuid: 24}, picture: {large: "yuguyguytytu"}, name: {first: "gjhgj", last: "kjjkhjk"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
                {firstName: 'Emmanuel', login: {uuid: 34}, picture: {large: "yuguyguytytu"}, name: {first: "gjhgj", last: "kjjkhjk"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
                {firstName: 'Emmanuel', login: {uuid: 4}, picture: {large: "yuguyguytytu"}, name: {first: "gjhgj", last: "kjjkhjk"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"}
            ]
        } sorter={true} />)
    });

    it('should render <Results /> when recieving users', () => {

        expect(wrapper.find(Results)).toBeTruthy();
    });
});

describe('<User /> to return if user found', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<User users={[
            {firstName: 'Emmanuel', login: {uuid: 24}, picture: {large: "yuguyguytytu"}, name: {first: "gjhgj", last: "kjjkhjk"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
            {firstName: 'Emmanuel', login: {uuid: 34}, picture: {large: "yuguyguytytu"}, name: {first: "gjhgj", last: "kjjkhjk"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
            {firstName: 'Emmanuel', login: {uuid: 4}, picture: {large: "yuguyguytytu"}, name: {first: "gjhgj", last: "kjjkhjk"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"}
        ]}
        selectedUserId={34} />)
    });

    it('should render <User /> when recieving users', () => {

        expect(wrapper.find(User)).toBeTruthy();
    })
});



describe('<QueryUser /> should display found USer', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<QueryUser users={[
            {login: {uuid: 24}, picture: {large: "yuguyguytytu"}, name: {first: "Manny", last: "Shegs"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
            {login: {uuid: 34}, picture: {large: "yuguyguytytu"}, name: {first: "Temi", last: "George"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
            {login: {uuid: 4}, picture: {large: "yuguyguytytu"}, name: {first: "Kayode", last: "Abbey"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"}
        ]}
        queryItem={'Manny'} />)
    });

    it('should render <Results /> when recieving users', () => {

        expect(wrapper.find(QueryUser)).toBeTruthy();
    })
});

describe('<QueryUser /> should display if no user found found USer', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<QueryUser users={[
            {login: {uuid: 24}, picture: {large: "yuguyguytytu"}, name: {first: "Manny", last: "Shegs"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
            {login: {uuid: 34}, picture: {large: "yuguyguytytu"}, name: {first: "Temi", last: "George"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"},
            {login: {uuid: 4}, picture: {large: "yuguyguytytu"}, name: {first: "Kayode", last: "Abbey"}, dob: {age: "jhijhijk"}, location: {street: {number: 4, name: "jjhgjh", state: "jggjhgj", country: "hjgjhgjhgj"}}, email: "jkjkjhkjk", cell: "gjgjhgjgjgj", phone: "kjhkjhkjhk"}
        ]}
        queryItem={'Micheal'} />)
    });

    it('should render <Results /> when recieving users', () => {

        expect(wrapper.find(QueryUser)).toEqual({});
    })
});