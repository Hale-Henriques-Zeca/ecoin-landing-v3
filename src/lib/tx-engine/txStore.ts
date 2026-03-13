export type TxStatus =
  | "pending"
  | "confirmed"
  | "failed";

export interface TxItem {
  hash: string
  status: TxStatus
  chainId: number
  createdAt: number
}

class TxStore {

  private listeners: Function[] = []
  private txs: TxItem[] = []

  subscribe(fn: Function) {
    this.listeners.push(fn)
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.txs))
  }

  getTxs() {
    return this.txs
  }

  add(tx: TxItem) {
    this.txs.unshift(tx)
    this.notify()
  }

  update(hash: string, status: TxStatus) {
    this.txs = this.txs.map((tx) =>
      tx.hash === hash ? { ...tx, status } : tx
    )

    this.notify()
  }
}

export const txStore = new TxStore()