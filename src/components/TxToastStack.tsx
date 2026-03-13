"use client"

import { useTxEngine } from "@/hooks/useTxEngine"
import TxToast from "./TxToast"

export default function TxToastStack(){

  const { txs } = useTxEngine()

  return (

    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {txs.map((tx)=>(
        <TxToast key={tx.hash} tx={tx}/>
      ))}

    </div>

  )

}