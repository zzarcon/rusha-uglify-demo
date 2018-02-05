// import * as Rusha from 'rusha';
import Rusha from 'rusha';

const estimatedChunkSize = 4 * 1024 * 1024; // hint for Rusha
const arrayBuffer = [];

const r = new Rusha(estimatedChunkSize).digestFromArrayBuffer(
  arrayBuffer,
);

const worker = Rusha.createWorker();
const hasherWorker = { worker, activeJobs: 0 };

worker.addEventListener('message', (event) => {
  this.handleWorkerMessage(event, hasherWorker);
});