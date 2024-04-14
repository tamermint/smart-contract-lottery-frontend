"use client"
import { ConnectButton } from "web3uikit"
import LotteryEntrance from "../../components/LotteryEntrance"
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-48">
            <div className="max-w-2xl w-full items-center justify-between font-mono text-5xl">
                Smart Contract Lottery
            </div>
            <div className="flex flex-col gap-y-8 max-w-5xl justify-between items-center text-2xl p-12">
                Decentralized Lottery
                <ConnectButton moralisAuth={false} />
                <LotteryEntrance />
            </div>
        </main>
    )
}
