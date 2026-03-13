import { publicClient } from "@/lib/publicClient"
import { txStore } from "./txStore"

export async function watchTransaction(hash: `0x${string}`) {

  try {

    const receipt = await publicClient.waitForTransactionReceipt({
      hash
    })

    if (receipt.status === "success") {
      txStore.update(hash, "confirmed")
    } else {
      txStore.update(hash, "failed")
    }

  } catch {

    txStore.update(hash, "failed")

  }

}