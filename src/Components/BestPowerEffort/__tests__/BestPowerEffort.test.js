import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import BestPowerEffort from '../BestPowerEffort';

describe('BestPowerEffort component', () => {

    afterEach(cleanup);
    
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<BestPowerEffort></BestPowerEffort>, div);
    });
    
    it('renders best 1 minute power effort correctly', () => {
        render(<BestPowerEffort oneMinute={300}></BestPowerEffort>);
        expect(screen.getByTestId('bestOneMinute')).toHaveTextContent(300);
    });
    
    it('renders best 20 minute power effort correctly', () => {
        render(<BestPowerEffort twentyMinute={200}></BestPowerEffort>);
        expect(screen.getByTestId('bestTwentyMinute')).toHaveTextContent(200);
    });
    
    it('matches snapshot', () => {
        const tree = renderer.create(<BestPowerEffort twentyMinute={200} oneMinute={300}></BestPowerEffort>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});
