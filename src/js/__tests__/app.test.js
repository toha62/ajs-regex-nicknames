import Validator from '../app';

test('should return array extracted from testObject contain properties:(id, name, description, icon). If property "description" does not exist in object, must create "description = Описание недоступно"', () => {
  expect(getSpecialAttack(testObj)).toEqual(result);
});
