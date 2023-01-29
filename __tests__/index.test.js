import genDiff from "../src/index.js"
import dataParsing from "../src/parsing.js"
import paths from "../src/paths.js"

const file1 = dataParsing(paths('file1.json'))
const file2 = dataParsing(paths('file2.json'))
const expectedValue = dataParsing(paths('result_json.txt'));

test('compare flat files', () => {
    expect(genDiff(file1, file2)).toEqual(expectedValue)
})