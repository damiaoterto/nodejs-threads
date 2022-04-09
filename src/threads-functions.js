import fibonacci from 'fibonacci';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

function runFibonacci(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData: data });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

if (!isMainThread) {
  const result = fibonacci.iterate(workerData.interations);
  parentPort.postMessage(result);
}

export { runFibonacci };

