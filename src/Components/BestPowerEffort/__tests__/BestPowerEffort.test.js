import React from 'react';
import ReactDOM from 'react-dom';
import BestPowerEffort from '../BestPowerEffort';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BestPowerEffort></BestPowerEffort>, div)
});

it('renders best 1 minute power effort correctly', () => {
    const {getByTestId} = render(<BestPowerEffort oneMinute={300}></BestPowerEffort>);
    expect(getByTestId('bestOneMinute')).toHaveTextContent(300);
});

it('renders best 20 minute power effort correctly', () => {
    const {getByTestId} = render(<BestPowerEffort twentyMinute={200}></BestPowerEffort>);
    expect(getByTestId('bestTwentyMinute')).toHaveTextContent(200);
});

it('matches snapshot', () => {
    const tree = renderer.create(<BestPowerEffort twentyMinute={200} oneMinute={300}></BestPowerEffort>).toJSON();
    expect(tree).toMatchSnapshot();
});
