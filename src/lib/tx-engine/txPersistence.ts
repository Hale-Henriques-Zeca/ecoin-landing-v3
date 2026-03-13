import { txStore } from "./txStore"

const STORAGE_KEY = "eden_tx_engine"

export function saveTxs(txs:any){

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(txs)
  )

}

export function loadTxs(){

  const data = localStorage.getItem(STORAGE_KEY)

  if(!data) return []

  return JSON.parse(data)

}

txStore.subscribe((txs)=>{

  saveTxs(txs)

})