import genDiff from '../src/index.js';
import paths from '../src/paths.js';
import fs from 'fs';
import path from 'path';
import { cwd } from 'node:process';

test('filepaths', () => {
    const fullPath = path.resolve(cwd(), '__fixtures__');
    expect(paths('file1.json')).toEqual(path.join(fullPath, 'file1.json'));
    expect(paths('')).toEqual(fullPath);
    expect(paths(fullPath)).toEqual(fullPath);
});

const expectedValue = fs.readFileSync(paths('result_json.txt'), 'utf-8');

test('compare flat files', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedValue);
});
