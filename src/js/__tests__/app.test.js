import Validator from '../app';

test.each([
  ['-petr', false],
  ['_petr', false],
  ['22petr', false],
  ['petr33', false],
  ['petr-', false],
  ['petr_', false],
  ['pe$tr', false],
  ['pet+r', false],
  ['Вася', false],
  ['petr55t1234r', false],
  ['Mas-ha777co_ol55girl', true],
  ['M777asha-cool_gir-8l', true],
  ['M7-ashA-c00l_gir-18l', true],
])('for nickname %s should return %s"', (name, result) => {
  const validator = new Validator(name);

  expect(validator.validateUserName()).toBe(result);
});
