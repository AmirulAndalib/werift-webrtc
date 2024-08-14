import { Server } from "ws";
import {
  RTCPeerConnection,
  RTCRtpCodecParameters,
} from "../../../../packages/webrtc/src";
import { MediaRecorder } from "../../../../packages/webrtc/src/nonstandard";

const server = new Server({ port: 8888 });
console.log("start");

server.on("connection", async (socket) => {
  const pc = new RTCPeerConnection({
    codecs: {
      audio: [
        new RTCRtpCodecParameters({
          mimeType: "audio/red",
          clockRate: 48000,
          channels: 2,
        }),
        new RTCRtpCodecParameters({
          mimeType: "audio/opus",
          clockRate: 48000,
          channels: 2,
        }),
      ],
    },
  });

  const audio = pc.addTransceiver("audio");
  audio.onTrack.subscribe((track) => {
    audio.sender.replaceTrack(track);
    const recorder = new MediaRecorder({
      path: "./audio.webm",
      numOfTracks: 1,
      tracks: [track],
    });
    setTimeout(() => {
      recorder.stop();
      console.log("stop");
    }, 7_000);
  });

  await pc.setLocalDescription(await pc.createOffer());
  const sdp = JSON.stringify(pc.localDescription);
  socket.send(sdp);

  socket.on("message", (data: any) => {
    pc.setRemoteDescription(JSON.parse(data));
  });
});
