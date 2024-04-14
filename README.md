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