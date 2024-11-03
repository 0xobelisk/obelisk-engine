import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../css/font-awesome.css';
import '@mysten/dapp-kit/dist/index.css';

import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { type SuiClientOptions } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFullnodeUrl } from '@mysten/sui/client';

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
