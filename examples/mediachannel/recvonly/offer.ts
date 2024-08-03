import { createSocket } from "dgram";
import { Server } from "ws";
import { RTCPeerConnection } from "../../../packages/webrtc/src";

const server = new Server({ port: 8888 });
console.log("start");
const udp = createSocket("udp4");

server.on("connection", async (socket) => {
  const pc = new RTCPeerConnection({});
  pc.iceConnectionStateChange.subscribe((v) =>
    console.log("pc.iceConnectionStateChange", v),
  );
  pc.addTransceiver("video", { direction: "recvonly" }).onTrack.subscribe(
    (track) =>
      track.onReceiveRtp.subscribe((packet) => {
        udp.send(packet.serialize(), 4002, "127.0.0.1");
      }),
  );

  await pc.setLocalDescription(await pc.createOffer());
  const sdp = JSON.stringify(pc.localDescription);
  socket.send(sdp);

  socket.on("message", (data: any) => {
    pc.setRemoteDescription(JSON.parse(data));
  });
});
