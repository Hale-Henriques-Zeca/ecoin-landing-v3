// src/lib/translationQueue.ts
"use client";

let queue = Promise.resolve();

export function enqueueTranslation(task) {
  queue = queue.then(() => task()).catch(() => {});
  return queue;
}
