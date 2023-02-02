import dataParsing from './parsers/parsing.js';
import { paths } from './paths.js';
import buildTree from './compare.js';
import stylish from './formatting/stylish.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
    const file1 = dataParsing(paths(filepath1));
    const file2 = dataParsing(paths(filepath2));
    return stylish(buildTree(file1, file2))
};

export default genDiff;
