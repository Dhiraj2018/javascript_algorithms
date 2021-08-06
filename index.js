const {  performance } = require('perf_hooks');
const {performanceAnalysis } = require( './performance');
const Addition = require('./computation/addition')

const addition = new Addition();

performanceAnalysis(addition.addUpto, 100000);
performanceAnalysis(addition.addUptoByFormula, 100000);

