import {bcs, loadMetadata, Obelisk, Transaction, TransactionResult} from '@0xobelisk/sui-client';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { Value } from '../../jotai';
import { useRouter } from 'next/router';
import { NETWORK, PACKAGE_ID, WORLD_ID } from '../../chain/config';
import { PRIVATEKEY } from '../../chain/key';

const Home = () => {
  const router = useRouter();
  const [value, setValue] = useAtom(Value);

  const query_counter_value = async () => {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID);
    const obelisk = new Obelisk({
      networkType: NETWORK,
      packageId: PACKAGE_ID,
      metadata: metadata,
    });
    const tx = new Transaction();
    const world = tx.object(WORLD_ID)
    const params = [
      world,
    ]
    const query_value = await obelisk.query.counter_schema.get(tx, params);
    console.log(bcs.u64().parse(Uint8Array.from(query_value["results"][0]["returnValues"][0][0])));
    const value = bcs.u64().parse(Uint8Array.from(query_value["results"][0]["returnValues"][0][0]))
    setValue(value);
  };

  const counter = async () => {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID);
    const obelisk = new Obelisk({
      networkType: NETWORK,
      packageId: PACKAGE_ID,
      metadata: metadata,
      secretKey: PRIVATEKEY,
    });
    const tx = new Transaction();
    const world = tx.object(WORLD_ID);
    const params = [world];
    (await obelisk.tx.counter_system.inc(tx, params, undefined, true)) as TransactionResult;
    const response = await obelisk.signAndSendTxn(tx);
    if (response.effects.status.status == 'success') {
      query_counter_value();
    }
  };

  useEffect(() => {
    if (router.isReady) {
      query_counter_value();
    }
  }, [router.isReady]);
  return (
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-6">
      <div className="flex flex-col gap-6 mt-12">
        <div className="flex flex-col gap-4">
          You account already have some sui from testnet
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
    </div>
  );
};

export default Home;
