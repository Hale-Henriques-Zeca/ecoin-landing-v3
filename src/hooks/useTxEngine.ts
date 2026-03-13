import { useEffect, useState } from "react"
import { txStore } from "@/lib/tx-engine/txStore"
import { watchTransaction } from "@/lib/tx-engine/txWatcher"

export function useTxEngine(){

  const [txs,setTxs] = useState(txStore.getTxs())

  useEffect(()=>{

    txStore.subscribe(setTxs)

  },[])

  function addTransaction(hash:string,chainId:number){

    txStore.add({
      hash,
      chainId,
      status:"pending",
      createdAt:Date.now()
    })

    watchTransaction(hash as `0x${string}`)

  }

  return {
    txs,
    addTransaction
  }

}