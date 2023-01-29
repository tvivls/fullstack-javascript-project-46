import path, { dirname } from 'node:path';
import { cwd } from 'node:process';
import { fileURLToPath } from 'url';

const paths = (filepath) => {
    return path.isAbsolute(filepath) ? filepath : path.resolve(cwd(), '__fixtures__', filepath);
}
export default paths;