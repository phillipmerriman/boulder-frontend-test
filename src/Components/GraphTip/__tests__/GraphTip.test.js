import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import GraphTip from '../GraphTip';

describe('GraphTip component', () => {

    afterEach(cleanup);
    
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<GraphTip />, div);
    });
    
    it('renders axis info correctly', () => {
        render(<GraphTip />);
        expect(screen.getByTestId('axisInfo')).toHaveTextContent('X-Axis: Milliseconds | Y-Axis: Power Output');
    });
    
    it('matches snapshot', () => {
        const tree = renderer.create(<GraphTip />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});
