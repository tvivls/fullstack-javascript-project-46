import genDiff from '../src/index.js';
import paths from '../src/paths.js';
import fs from 'fs';

test('filepaths', () => {
    const fullPath = '/Users/valentinacerednicenko/Documents/fullstack-javascript-project-46/__fixtures__/file1.json';
    expect(paths('file1.json')).toEqual(fullPath);
    expect(paths('')).toEqual('/Users/valentinacerednicenko/Documents/fullstack-javascript-project-46/__fixtures__');
    expect(paths(fullPath)).toEqual(fullPath);
});

const expectedValue = fs.readFileSync(paths('result_json.txt'), 'utf-8');

test('compare flat files', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedValue);
});
