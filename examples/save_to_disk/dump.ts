import { readFile } from "fs/promises";
import { uint16Add, uint32Add } from "../../packages/common/src";
import { MediaStreamTrack, RtpPacket } from "../../packages/webrtc/src";
import { MediaRecorder } from "../../packages/webrtc/src/nonstandard";

(async () => {
  const packets = await Promise.all(
    [...Array(34).keys()].map(async (i) => {
      const buf = await readFile(`./assets/rtp/vp8/dump_${i}.rtp`);
      return RtpPacket.deSerialize(buf);
    }),
  );

  const track = new MediaStreamTrack({ kind: "video" });
  const recorder = new MediaRecorder({
    path: "./test.webm",
    numOfTracks: 1,
    width: 640,
    height: 360,
    tracks: [track],
  });

  let timestampOffset = 0;
  let sequenceNumberOffset = 0;
  for (let times = 0; times < 100; times++) {
    const headTimestamp = packets[0].header.timestamp;
    const tailTimestamp = packets.slice(-1)[0].header.timestamp;
    const headSeq = packets[0].header.sequenceNumber;
    const tailSeq = packets.slice(-1)[0].header.sequenceNumber;

    packets.forEach((p) => {
      const packet = p.clone();
      packet.header.timestamp = uint32Add(p.header.timestamp, timestampOffset);
      packet.header.sequenceNumber = uint16Add(
        packet.header.sequenceNumber,
        sequenceNumberOffset,
      );
      track.onReceiveRtp.execute(packet);
    });

    timestampOffset += uint32Add(tailTimestamp, -headTimestamp);
    sequenceNumberOffset += uint16Add(uint16Add(tailSeq, -headSeq), 1);
  }

  recorder.stop();
})();
