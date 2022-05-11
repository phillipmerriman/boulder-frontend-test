import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import PowerOutputChart from '../PowerOutputChart';
import mockData from '../../../Utils/mockData/msAndPower';

describe('PowerOutputChart component', () => {
    
    afterEach(cleanup);
    
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<PowerOutputChart />, div);
    });
    
    it('matches snapshot', () => {
        const tree = renderer.create(<PowerOutputChart msAndPower={mockData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});
