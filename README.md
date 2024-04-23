## Follow Along with Pat Collins's Smart Contract Lottery Course

- Moralis integration works - the wrapper works with the latest package of moralis 1.4.2

- The following dependencies worked :
```json
    {
  "name": "smart-contract-lottery-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@walletconnect/ethereum-provider": "^2.12.2",
    "@walletconnect/modal": "^2.6.2",
    "@web3uikit/core": "^1.1.5",
    "@web3uikit/icons": "^1.1.2",
    "@web3uikit/web3": "^0.3.2",
    "magic-sdk": "^28.0.3",
    "moralis-v1": "^1.13.0",
    "next": "14.2.1",
    "react": "^18",
    "react-dom": "^18",
    "react-moralis": "^1.4.2",
    "web3uikit": "^1.0.4"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "eslint": "^8",
    "eslint-config-next": "14.2.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.3"
  }
}

```

- Had to wrap notification provider around Lottery entrance component as the new next js update doesn't allow components to be layered in the layout :
```js
  "use client"
import { ConnectButton, NotificationProvider } from "web3uikit"
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
                <NotificationProvider>
                    <LotteryEntrance />
                </NotificationProvider>
            </div>
        </main>
    )
}

```

- To run the project in dev:
```zsh
  npm run dev
```
- To host, make sure to export your build by the following config:
next.config.mjs
```js
  const nextConfig = {
    output: "export",
}
```
- To build:
```zsh
  npm run build
```
- hosted on ipfs - ipfs://QmPR1Kn8UBZkWfWnQm3SX12nF9X53jMqUaVrVEyMwZN362