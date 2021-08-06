const {  performance } = require('perf_hooks');
const {init} = require('./init');


exports.performanceAnalysis= (method, args)=>{
    let t1 = performance.now();
    console.log(init(method, args));
    let t2= performance.now();
    console.log(`Time elapsed "${(t2-t1)/1000} sec`)

}