import { calculatePower } from '../calculatePower';
import mockData from '../mockData/msAndPower';

describe('calculatePower', () => {

    it('should calculate best power output over time', () => {
        const power = mockData.map((object) => object.power);
        expect(calculatePower(power, 4)).toBe(420);
    });

});
