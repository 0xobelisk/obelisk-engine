import { loadMetadata, Obelisk, Types } from '@0xobelisk/aptos-client';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { Value } from '../../jotai';
import { useRouter } from 'next/router';
import { NETWORK, PACKAGE_ID } from '../../chain/config';
import { obeliskConfig } from '../../../obelisk.config';
import { PRIVATEKEY } from '../../chain/key';

const Home = () => {
  const router = useRouter();
  const [value, setValue] = useAtom(Value);

  const counter = async () => {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID);
    const obelisk = new Obelisk({
      networkType: NETWORK,
      packageId: PACKAGE_ID,
      metadata: metadata,
      secretKey: PRIVATEKEY,
    });

    const payload = (await obelisk.tx.counter_system.increase(
      obelisk.getAddress(),
      undefined, // params
      undefined, // typeArguments
      true,
    )) as Types.EntryFunctionPayload;

    await obelisk.signAndSendTxnWithPayload(payload);
    setTimeout(async () => {
      const component_name = Object.keys(obeliskConfig.schemas)[0];
      const component_value = await obelisk.getEntity(component_name);
      setValue(component_value[0]);
    }, 1000);
  };

  useEffect(() => {
    if (router.isReady) {
      const query_counter = async () => {
        const metadata = await loadMetadata(NETWORK, PACKAGE_ID);
        const obelisk = new Obelisk({
          networkType: NETWORK,
          packageId: PACKAGE_ID,
          metadata: metadata,
        });
        // counter component name
        const component_name = Object.keys(obeliskConfig.schemas)[0];
        const component_value = await obelisk.getEntity(component_name);
        setValue(component_value[0]);
      };
      query_counter();
    }
  }, [router.isReady, value]);
  return (
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-6">
      <div className="flex flex-col gap-6 mt-12">
        <div className="flex flex-col gap-4">
          You account already have some APT from localnet
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
