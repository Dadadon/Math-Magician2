import calculate from "../components/logic/calculate";

describe('Test addition', () => {
  const obj = {
    total: 2,
    next: 2,
    operation: '+',
  };
  const calc = calculate(obj, '=');
  it('test addition', () => {
    expect(calc.total).toBe('4');
  });
});

describe('Test multiply', () => {
  const obj = {
    total: 6,
    next: 2,
    operation: 'x',
  };
  const calc = calculate(obj, '=');
  it('test myltiply', () => {
    expect(calc.total).toBe('12');
  });
});