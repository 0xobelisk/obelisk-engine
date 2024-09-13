import { loadMetadata, Obelisk, Transaction, bcs, DevInspectResults } from '@0xobelisk/sui-client';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { Value } from '../../jotai';
import { useRouter } from 'next/router';
import { NETWORK, PACKAGE_ID, WORLD_ID } from '../../chain/config';
import { obeliskConfig } from '../../../obelisk.config';
import {
  ConnectButton,
  useConnectWallet,
  useCurrentAccount,
  useCurrentWallet,
  useSignAndExecuteTransaction,
  useSignTransaction,
  useSuiClient,
} from '@mysten/dapp-kit';

type data = {
  type: string;
  fields: Record<string, any>;
  hasPublicTransfer: boolean;
  dataType: 'moveObject';
};

const Home = () => {
  const router = useRouter();
  const { mutateAsync: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const { connectionStatus } = useCurrentWallet();
  const [value, setValue] = useAtom(Value);
  const query_counter = async () => {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID);
    const obelisk = new Obelisk({
      networkType: NETWORK,
      packageId: PACKAGE_ID,
      metadata: metadata,
    });
    const component_name = Object.keys(obeliskConfig.schemas)[0];
    const component_value = await obelisk.getEntity(WORLD_ID, component_name);
    setValue(component_value.toString());
  };

  const counter = async () => {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID);
    const obelisk = new Obelisk({
      networkType: NETWORK,
      packageId: PACKAGE_ID,
      metadata: metadata,
    });
    const tx = new Transaction();
    const world = tx.object(WORLD_ID);
    const params = [world];
    await obelisk.tx.counter_system.inc(tx, params, undefined, true);
    await signAndExecuteTransaction(
      {
        transaction: tx.serialize(),
        chain: `sui:testnet`,
      },
      {
        onError: error => {
          console.log('executed transaction', error);
        },
      },
    );
    query_counter();
  };

  useEffect(() => {
    if (router.isReady) {
      query_counter();
    }
  }, [router.isReady]);

  return (
    <div className="flex justify-between items-start">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-6">
        {connectionStatus !== 'connected' ? (
          <ConnectButton />
        ) : (
          <>
            <div>
              <ConnectButton />
            </div>
            <div className="flex flex-col gap-6 mt-12">
              <div className="flex flex-col gap-4">
                First, fund this wallet from the Sui faucet:
                <div className="flex flex-col gap-6 text-2xl text-green-600 mt-6 ">Counter: {value}</div>
                <div className="flex flex-col gap-6">
                  <button
                    type="button"
                    className="mx-auto px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => {
                      counter();
                    }}
                  >
                    Increment
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
