import {readFile} from './fs';

export default async function getMalicious() {
  try {
    return (await readFile(`${process.env.HOME}/.yarn-malicious`)).split(/\r?\n/);
  } catch(e) {
    return [];
  }
}
