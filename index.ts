import dotenv from 'dotenv';
import {getRepos} from './lib/github.js';
import {getPackages} from './lib/pip.js'

dotenv.config();

const repos = await getRepos(process.env.GITHUB_USERID as string, process.env.GITHUB_TOKEN as string)
const packages = await getPackages(process.env.GITHUB_USERID as string, repos)
console.log(JSON.stringify({packages}, null, 2));
