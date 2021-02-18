import { RGBToHex } from './test-utils';

test('works for both comma, and space separators', () => {
  expect(RGBToHex('rgb(255,255,255)')).toEqual('#ffffff');
  expect(RGBToHex('rgb(0,0,0)')).toEqual('#000000');
  expect(RGBToHex('rgb(255 255 255)')).toEqual('#ffffff');
  expect(RGBToHex('rgb(0 0 0)')).toEqual('#000000');
});
