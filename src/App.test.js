import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import App from './App';
import BestPowerEffort from './Components/BestPowerEffort/BestPowerEffort';

import PowerOutputChart from './Components/PowerOutputChart/PowerOutputChart';
import GraphTip from './Components/GraphTip/GraphTip';

describe('Parent component - App.js', () => {

    afterEach(cleanup);
  
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    
    it('renders best 1 minute power effort correctly', () => {
        render(<BestPowerEffort oneMinute={300} />);
        expect(screen.getByTestId('bestOneMinute')).toHaveTextContent(300);
    });
  
    it('renders best 20 minute power effort correctly', () => {
        render(<BestPowerEffort twentyMinute={200} />);
        expect(screen.getByTestId('bestTwentyMinute')).toHaveTextContent(200);
    });

    it('renders PowerOutputChart correctly', () => {
        render(<PowerOutputChart />);
        expect(screen.getByTestId('powerOutputChart')).toBeInTheDocument();
    });
    
    it('renders axis info correctly', () => {
        render(<GraphTip />);
        expect(screen.getByTestId('axisInfo')).toHaveTextContent('X-Axis: Milliseconds | Y-Axis: Power Output');
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
  
});
