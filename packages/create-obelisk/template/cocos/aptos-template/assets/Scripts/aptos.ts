import {_decorator, Component, find, LabelComponent, sys} from "cc";
import {obeliskConfig} from "./obelisk.config";
import {NETWORK, PACKAGE_ID} from "./chain/config";

const { ccclass, property } = _decorator;

@ccclass("aptos")
export class aptos extends Component {
  async start() {
    this.aptos_account_create();
  }

  async aptos_account_create() {
    // @ts-ignore
    const obelisk_sdk = window.obelisk;
    const decode = JSON.parse(sys.localStorage.getItem("userWalletData"));
    if (decode == null) {
      const keypair = new obelisk_sdk.AptosAccount();
      const wallet = keypair.toPrivateKeyObject()
      const code = JSON.stringify(wallet);
      sys.localStorage.setItem("userWalletData", code);
      const metadata = await obelisk_sdk.loadMetadata(NETWORK, PACKAGE_ID);
      const obelisk = new obelisk_sdk.Obelisk({
        networkType: NETWORK,
        packageId: PACKAGE_ID,
        metadata: metadata,
      });
      const address = keypair.address().toString();
      await obelisk.requestFaucet(NETWORK, address);
      const component_name = Object.keys(obeliskConfig.schemas)[0];
      const component_value = await obelisk.getEntity(component_name);
      console.log(component_value);
    } else {
      const metadata = await obelisk_sdk.loadMetadata(NETWORK, PACKAGE_ID);
      const obelisk = new obelisk_sdk.Obelisk({
        networkType: NETWORK,
        packageId: PACKAGE_ID,
        metadata: metadata,
      });
      const component_name = Object.keys(obeliskConfig.schemas)[0];
      const component_value = await obelisk.getEntity(component_name);
      const counter_node = find("Canvas/Camera/counter");
      const label = counter_node.getComponent("cc.Label") as LabelComponent;
      label.string = `Counter: ${component_value}`;
    }
  }

  async export_wallet() {
    const keypair = JSON.parse(sys.localStorage.getItem("userWalletData"));

    return keypair.privateKeyHex;
  }

  async gameStart() {
    // @ts-ignore
    const obelisk_sdk = window.obelisk;
    const metadata = await obelisk_sdk.loadMetadata(NETWORK, PACKAGE_ID);
    console.log(metadata);

    const privateKey = await this.export_wallet();
    // new obelisk class
    const obelisk = new obelisk_sdk.Obelisk({
      networkType: NETWORK,
      packageId: PACKAGE_ID,
      metadata: metadata,
      secretKey: privateKey,
    });

    const response = await obelisk.tx.counter_system.increase(
      undefined,
      undefined
    );
    console.log(response);
    setTimeout(async () => {
      const metadata = await obelisk_sdk.loadMetadata(NETWORK, PACKAGE_ID);
      const obelisk = new obelisk_sdk.Obelisk({
        networkType: NETWORK,
        packageId: PACKAGE_ID,
        metadata: metadata,
      });
      const component_name = Object.keys(obeliskConfig.schemas)[0];
      const component_value = await obelisk.getEntity(component_name);
      const counter_node = find("Canvas/Camera/counter");
      const label = counter_node.getComponent("cc.Label") as LabelComponent;
      label.string = `Counter: ${component_value}`;
    }, 1000);
  }

  update(deltaTime: number) {}
}
