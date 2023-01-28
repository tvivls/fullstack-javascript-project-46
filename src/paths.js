import path, { dirname } from 'node:path';
import { cwd } from 'node:process';
import { fileURLToPath } from 'url';

const paths = (filepath) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return path.isAbsolute(filepath) ? filepath : path.resolve(cwd(), __dirname, filepath);
}
export default paths;