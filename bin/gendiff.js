#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import genDiff from '../src/index.js';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>',  'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((file1, file2) => console.log(genDiff(file1, file2)))

program.parse();