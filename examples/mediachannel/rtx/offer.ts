import { Server } from "ws";
import {
  RTCPeerConnection,
  RTCRtpCodecParameters,
  useAbsSendTime,
  useSdesMid,
} from "../../../packages/webrtc/src";

const server = new Server({ port: 8888 });
console.log("start");

server.on("connection", async (socket) => {
  const pc = new RTCPeerConnection({
    codecs: {
      video: [
        new RTCRtpCodecParameters({
          mimeType: "video/VP8",
          clockRate: 90000,
          rtcpFeedback: [
            { type: "ccm", parameter: "fir" },
            { type: "nack" },
            { type: "nack", parameter: "pli" },
            { type: "goog-remb" },
          ],
        }),
        new RTCRtpCodecParameters({
          mimeType: "video/rtx",
          clockRate: 90000,
        }),
      ],
    },
    headerExtensions: {
      video: [useSdesMid(), useAbsSendTime()],
    },
  });

  const transceiver = pc.addTransceiver("video");
  transceiver.onTrack.subscribe((track) => {
    transceiver.sender.replaceTrack(track);

    transceiver.sender.onPictureLossIndication.subscribe(() => {
      console.log("incoming PLI");
      transceiver.receiver.sendRtcpPLI(track.ssrc);
    });

    transceiver.sender.onGenericNack.subscribe(() => {
      // console.log("incoming Nack");
    });
  });

  await pc.setLocalDescription(await pc.createOffer());
  const sdp = JSON.stringify(pc.localDescription);
  socket.send(sdp);

  socket.on("message", (data: any) => {
    pc.setRemoteDescription(JSON.parse(data));
  });
});
