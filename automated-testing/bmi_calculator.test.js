const f = require('./bmi_calculator.js')

test(`test 1 for BMI calculator`, () => {
    expect(f.calculateBMI(71, 1.68)).toBe('25.16');
});

test(`test 1 for BMI calculator`, () => {
    expect(f.calculateBMI(68, 1.81)).toBe('20.76');
});

test(`test 1 for BMI calculator`, () => {
    expect(f.calculateBMI(120, 1.78)).toBe('37.87');
});