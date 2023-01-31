import _ from 'lodash';
import dataParsing from './parsers/parsing.js';
import paths from './paths.js';
import toString from '../formatting/toJSON.js';

const compare = (file1, file2) => {
  const result = {};
  const keys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  keys.flatMap((key) => {
    if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      if (file1[key] === file2[key]) return result[`  ${key}`] = file1[key];
      return [
        result[`- ${key}`] = file1[key],
        result[`+ ${key}`] = file2[key],
      ].flat();
    }
    if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) return result[`- ${key}`] = file1[key];
    return result[`+ ${key}`] = file2[key];
  });
  return result;
};

const genDiff = (filepath1, filepath2) => {
    const file1 = dataParsing(paths(filepath1));
    const file2 = dataParsing(paths(filepath2));
    return toString(compare(file1, file2));
};

export default genDiff;
