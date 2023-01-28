import fs from 'fs';

const dataParsing = (filepath) => {
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
};
export default dataParsing;