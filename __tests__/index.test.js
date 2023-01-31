import genDiff from '../src/index.js';
import { paths } from '../src/paths.js';
import fs from 'fs';
import path from 'path';
import { cwd } from 'node:process';
import { extname } from '../src/paths.js';

const fullPath = path.resolve(cwd(), '__fixtures__');

test('format', () => {
  expect(extname(path.join(fullPath, 'file1.json'))).toEqual('.json');
  expect(extname(path.join(fullPath, 'file1.yaml'))).toEqual('.yaml');
});

test('filepaths', () => {
  expect(paths('file1.json')).toEqual(path.join(fullPath, 'file1.json'));
  expect(paths('file1.yaml')).toEqual(path.join(fullPath, 'file1.yaml'));
  expect(paths('')).toEqual(fullPath);
  expect(paths(fullPath)).toEqual(fullPath);
});

const expectedValue = fs.readFileSync(paths('result_json.txt'), 'utf-8');

test('compare flat JSON files', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedValue);
});

test('compare flat YAML files', () => {
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(expectedValue);
});
