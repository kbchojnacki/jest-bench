const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os =  require('os');

async function bench() {
    const executions = 20;
    let start = new Date();
    for(let i =0;i<executions;i++){
        await exec('jest');
        // console.log(`${i} execution, avg: ${(new Date() - start)/(i+1)} ms`);
    }
    let time = new Date() - start;
    console.log(`avg.: ${time/executions} ms, exec: ${executions}, cpu: ${os.cpus()[0].model}, os: ${os.platform()} ${os.release()}`)

}
bench();