import { TxItem } from "@/lib/tx-engine/txStore"

export default function TxToast({tx}:{tx:TxItem}){

  const explorer =
  `https://bscscan.com/tx/${tx.hash}`

  return (

    <div className="bg-black text-white p-4 rounded-xl shadow-lg w-[350px]">

      <div className="text-xs mb-1">
        {tx.status.toUpperCase()}
      </div>

      <div className="text-xs break-all">
        {tx.hash}
      </div>

      <a
        href={explorer}
        target="_blank"
        className="text-green-400 text-xs mt-2 inline-block"
      >
        View on BscScan
      </a>

    </div>

  )

}