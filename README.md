# btckit

[`btckit`](http://btckit.org/) is a standardized, extensible way to interact with Bitcoin wallets using [JSON-RPC 2.0](https://www.jsonrpc.org/specification)

## Getting started

Install the types package:

```sh
yarn add -D @btckit/types
npm install -D @btckit/types
```

Importing the types package declares the `btc` global on your environment's global object.

```ts
import '@btckit/types';

if (!window.btc) console.warn('No btckit-compatible wallets detected');

// Strongly-typed response value
const addresses = window.btc.request('getAddresses');
```

