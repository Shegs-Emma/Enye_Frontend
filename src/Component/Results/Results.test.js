import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from '../Result/Result';

configure({adapter: new Adapter()});

describe('<Result />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Result 
            firstName={'Emma'}
            lastName={'shegs'}
            profilePic={'jkhkjhks'}
            email={'jkhjkhkj'}
            addrNumber={'79787968796'}
            addrName={'ihkhkj kjh'}
            addrState={'jkhjkjkjkj'}
            addrCountry={'kjhkjhkj'}
            phone={'8798787980'}
            id={'89'} />)
    });

    it('should render <Result /> when recieving users', () => {

        expect(wrapper.find(Result)).toBeTruthy();
    })
});