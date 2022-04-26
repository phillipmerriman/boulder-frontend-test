
# Peaksware Javascript Code Test Instructions

Here is a barebones create-react-app application with the addition of a charting library called Recharts; you are free to add any additional libraries as you see fit (Redux, Typescript, etc).

Your task is to write a small single page application that loads the data from
`workout-data.json`, runs calculations and displays data on a chart. Your
application should be well structured and demonstrate what you consider production quality, readable,
maintainable, and testable software.

We are interested primarily in the functionality and quality of your implementation; Don't focus too much on how it looks, something simple that is relatively easy to look at will suffice.

After your submission, we should be able to run `npm i`,  then `npm start` and see your application running.

## Algorithm
- Write a function that finds the best 20 minute power effort, where "best" is defined as
    highest continuous average for those 20 minutes
- Make your algorithm as efficient as possible
- Additionally, Use your function to calculate the 1 minute best effort

## User Interface Functionality
- Display the power output over time on a chart, using time as the X axis
- Display the calculated 1 and 20 minute best effort power values

## Best Practices
- This program was purposely left as a default create-react-app to give you freedom to organize your code as you see fit
- Rewrite and refactor to use React best practices, functional or OO patterns to have a reasonable directory structure

## Communication and Delivery
- If you have any questions on the code or instructions, please don't hesitate to email us

# Application Details

## NPM Commands
- `npm i`
- `npm start`
- `npm test`


## Included NPM Modules
#### Create React App 5.0.0 (https://www.npmjs.com/package/create-react-app/v/5.0.0)

#### React 17.0.2 (https://www.npmjs.com/package/react/v/17.0.2)

#### Recharts 2.1.9 (https://www.npmjs.com/package/recharts/v/2.1.9)

#### React Testing Library 12.1.3 (https://www.npmjs.com/package/@testing-library/react/v/12.1.3)


