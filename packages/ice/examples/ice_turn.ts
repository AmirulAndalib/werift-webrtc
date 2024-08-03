import { setTimeout } from "timers/promises";
import { type Address, Connection } from "../src";

const url2Address = (url?: string) => {
  if (!url) return;
  const [address, port] = url.split(":");
  return [address, Number.parseInt(port)] as Address;
};
const address: Address = url2Address("turn.werift.com:443")!;
const username = "";
const password = "";

(async () => {
  const a = new Connection(true, {
    turnServer: address,
    turnUsername: username,
    turnPassword: password,
    forceTurn: true,
  });
  const b = new Connection(false, {
    turnServer: address,
    turnUsername: username,
    turnPassword: password,
    forceTurn: true,
  });

  await a.gatherCandidates();
  b.remoteUsername = a.localUserName;
  b.remotePassword = a.localPassword;

  await b.gatherCandidates();
  a.remoteUsername = b.localUserName;
  a.remotePassword = b.localPassword;

  const addCandidatesLater = async (a: Connection, b: Connection) => {
    await setTimeout(100);
    for (const candidate of b.localCandidates) {
      a.addRemoteCandidate(candidate);
      await setTimeout(100);
    }
    a.addRemoteCandidate(undefined);
  };

  await Promise.all([
    a.connect(),
    b.connect(),
    addCandidatesLater(a, b),
    addCandidatesLater(b, a),
  ]);

  // # send data a -> b
  await a.send(Buffer.from("howdee"));
  let [data] = await b.onData.asPromise();
  console.log("b", data.toString());

  // # send data b -> a
  await b.send(Buffer.from("gotcha"));
  [data] = await a.onData.asPromise();
  console.log("a", data.toString());

  await a.close();
  await b.close();
})();
