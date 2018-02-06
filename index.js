// import * as Rusha from 'rusha';
import Rusha from 'rusha';

console.log(Rusha)
console.log(Rusha.createWorker)

const estimatedChunkSize = 4 * 1024 * 1024; // hint for Rusha
const arrayBuffer = [];

const r = new Rusha(estimatedChunkSize).digestFromArrayBuffer(
  arrayBuffer,
);

console.log(r)

const worker = Rusha.createWorker();
const hasherWorker = { worker, activeJobs: 0 };

console.log(worker)

worker.addEventListener('message', (event) => {
  this.handleWorkerMessage(event, hasherWorker);
});