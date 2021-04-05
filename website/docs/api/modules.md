---
id: "modules"
title: "werift"
sidebar_label: "Table of contents"
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
---

# werift

## Table of contents

### Enumerations

- [PacketChunk](enums/packetchunk.md)
- [PacketStatus](enums/packetstatus.md)

### Classes

- [GenericNack](classes/genericnack.md)
- [MediaStreamTrack](classes/mediastreamtrack.md)
- [PictureLossIndication](classes/picturelossindication.md)
- [PromiseQueue](classes/promisequeue.md)
- [RTCCertificate](classes/rtccertificate.md)
- [RTCDataChannel](classes/rtcdatachannel.md)
- [RTCDtlsTransport](classes/rtcdtlstransport.md)
- [RTCIceGatherer](classes/rtcicegatherer.md)
- [RTCIceTransport](classes/rtcicetransport.md)
- [RTCPeerConnection](classes/rtcpeerconnection.md)
- [RTCRtpCodecParameters](classes/rtcrtpcodecparameters.md)
- [RTCRtpTransceiver](classes/rtcrtptransceiver.md)
- [RTCSctpTransport](classes/rtcsctptransport.md)
- [RTCSessionDescription](classes/rtcsessiondescription.md)
- [ReceiverEstimatedMaxBitrate](classes/receiverestimatedmaxbitrate.md)
- [RecvDelta](classes/recvdelta.md)
- [RtcpHeader](classes/rtcpheader.md)
- [RtcpPacketConverter](classes/rtcppacketconverter.md)
- [RtcpPayloadSpecificFeedback](classes/rtcppayloadspecificfeedback.md)
- [RtcpReceiverInfo](classes/rtcpreceiverinfo.md)
- [RtcpRrPacket](classes/rtcprrpacket.md)
- [RtcpSenderInfo](classes/rtcpsenderinfo.md)
- [RtcpSourceDescriptionPacket](classes/rtcpsourcedescriptionpacket.md)
- [RtcpSrPacket](classes/rtcpsrpacket.md)
- [RtcpTransportLayerFeedback](classes/rtcptransportlayerfeedback.md)
- [RtpHeader](classes/rtpheader.md)
- [RtpPacket](classes/rtppacket.md)
- [RunLengthChunk](classes/runlengthchunk.md)
- [SourceDescriptionChunk](classes/sourcedescriptionchunk.md)
- [SourceDescriptionItem](classes/sourcedescriptionitem.md)
- [SrtcpSession](classes/srtcpsession.md)
- [SrtpSession](classes/srtpsession.md)
- [StatusVectorChunk](classes/statusvectorchunk.md)
- [TransportWideCC](classes/transportwidecc.md)

## Type aliases

### Direction

Ƭ **Direction**: *typeof* Directions[*number*]

Defined in: [webrtc/src/media/rtpTransceiver.ts:66](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/media/rtpTransceiver.ts#L66)

___

### Extension

Ƭ **Extension**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`id` | *number* |
`payload` | Buffer |

Defined in: [rtp/src/rtp/rtp.ts:3](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/rtp/src/rtp/rtp.ts#L3)

___

### Kind

Ƭ **Kind**: *audio* \| *video* \| *application* \| *unknown*

Defined in: [webrtc/src/types/domain.ts:1](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/types/domain.ts#L1)

___

### PeerConfig

Ƭ **PeerConfig**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`codecs` | *Partial*<{ `audio`: [*RTCRtpCodecParameters*](classes/rtcrtpcodecparameters.md)[] ; `video`: [*RTCRtpCodecParameters*](classes/rtcrtpcodecparameters.md)[]  }\> |
`headerExtensions` | *Partial*<{ `audio`: RTCRtpHeaderExtensionParameters[] ; `video`: RTCRtpHeaderExtensionParameters[]  }\> |
`iceConfig` | *Partial*<IceOptions\> |

Defined in: [webrtc/src/peerConnection.ts:925](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/peerConnection.ts#L925)

___

### RTCIceCandidateJSON

Ƭ **RTCIceCandidateJSON**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`candidate` | *string* |
`sdpMLineIndex` | *number* |
`sdpMid` | *string* |

Defined in: [webrtc/src/transport/ice.ts:165](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/transport/ice.ts#L165)

___

### RtcpPacket

Ƭ **RtcpPacket**: [*RtcpRrPacket*](classes/rtcprrpacket.md) \| [*RtcpSrPacket*](classes/rtcpsrpacket.md) \| [*RtcpPayloadSpecificFeedback*](classes/rtcppayloadspecificfeedback.md) \| [*RtcpSourceDescriptionPacket*](classes/rtcpsourcedescriptionpacket.md) \| [*RtcpTransportLayerFeedback*](classes/rtcptransportlayerfeedback.md)

Defined in: [rtp/src/rtcp/rtcp.ts:8](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/rtp/src/rtcp/rtcp.ts#L8)

___

### TransceiverOptions

Ƭ **TransceiverOptions**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`simulcast` | { `direction`: SimulcastDirection ; `rid`: *string*  }[] |

Defined in: [webrtc/src/media/rtpTransceiver.ts:70](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/media/rtpTransceiver.ts#L70)

## Variables

### RTP\_EXTENSION\_URI

• `Const` **RTP\_EXTENSION\_URI**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`absSendTime` | *http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time* |
`sdesMid` | *urn:ietf:params:rtp-hdrext:sdes:mid* |
`sdesRTPStreamID` | *urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id* |
`transportWideCC` | *http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01* |

Defined in: [webrtc/src/extension/rtpExtension.ts:3](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/extension/rtpExtension.ts#L3)

## Functions

### divide

▸ **divide**(`from`: *string*, `split`: *string*): [*string*, *string*]

#### Parameters:

Name | Type |
:------ | :------ |
`from` | *string* |
`split` | *string* |

**Returns:** [*string*, *string*]

Defined in: [webrtc/src/helper.ts:9](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/helper.ts#L9)

___

### enumerate

▸ **enumerate**<T\>(`arr`: T[]): [*number*, T][]

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`arr` | T[] |

**Returns:** [*number*, T][]

Defined in: [webrtc/src/helper.ts:1](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/helper.ts#L1)

___

### fingerprint

▸ **fingerprint**(`file`: Buffer, `hashname`: *string*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`file` | Buffer |
`hashname` | *string* |

**Returns:** *any*

Defined in: [webrtc/src/utils.ts:10](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L10)

___

### isDtls

▸ **isDtls**(`buf`: Buffer): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`buf` | Buffer |

**Returns:** *boolean*

Defined in: [webrtc/src/utils.ts:16](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L16)

___

### isMedia

▸ **isMedia**(`buf`: Buffer): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`buf` | Buffer |

**Returns:** *boolean*

Defined in: [webrtc/src/utils.ts:21](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L21)

___

### isRtcp

▸ **isRtcp**(`buf`: Buffer): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`buf` | Buffer |

**Returns:** *boolean*

Defined in: [webrtc/src/utils.ts:26](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L26)

___

### microTime

▸ `Const`**microTime**(): *number*

**Returns:** *number*

Defined in: [webrtc/src/utils.ts:35](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L35)

___

### milliTime

▸ `Const`**milliTime**(): *number*

**Returns:** *number*

Defined in: [webrtc/src/utils.ts:37](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L37)

___

### ntpTime

▸ `Const`**ntpTime**(): *bigint*

**Returns:** *bigint*

Defined in: [webrtc/src/utils.ts:39](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L39)

___

### random16

▸ **random16**(): *any*

**Returns:** *any*

Defined in: [webrtc/src/utils.ts:56](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L56)

___

### random32

▸ **random32**(): *bigint*

**Returns:** *bigint*

Defined in: [webrtc/src/utils.ts:60](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L60)

___

### reverseSimulcastDirection

▸ **reverseSimulcastDirection**(`dir`: *recv* \| *send*): *send* \| *recv*

#### Parameters:

Name | Type |
:------ | :------ |
`dir` | *recv* \| *send* |

**Returns:** *send* \| *recv*

Defined in: [webrtc/src/utils.ts:30](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L30)

___

### sleep

▸ **sleep**(`ms`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |

**Returns:** *Promise*<void\>

Defined in: [webrtc/src/helper.ts:5](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/helper.ts#L5)

___

### uint16Add

▸ **uint16Add**(`a`: *number*, `b`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* |
`b` | *number* |

**Returns:** *number*

Defined in: [webrtc/src/utils.ts:68](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L68)

___

### uint24

▸ **uint24**(`v`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`v` | *number* |

**Returns:** *number*

Defined in: [webrtc/src/utils.ts:76](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L76)

___

### uint32Add

▸ **uint32Add**(`a`: *bigint*, `b`: *bigint*): *bigint*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *bigint* |
`b` | *bigint* |

**Returns:** *bigint*

Defined in: [webrtc/src/utils.ts:72](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L72)

___

### uint8Add

▸ **uint8Add**(`a`: *number*, `b`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* |
`b` | *number* |

**Returns:** *number*

Defined in: [webrtc/src/utils.ts:64](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/utils.ts#L64)

___

### useAbsSendTime

▸ **useAbsSendTime**(): *RTCRtpHeaderExtensionParameters*

**Returns:** *RTCRtpHeaderExtensionParameters*

Defined in: [webrtc/src/extension/rtpExtension.ts:29](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/extension/rtpExtension.ts#L29)

___

### useSdesMid

▸ **useSdesMid**(): *RTCRtpHeaderExtensionParameters*

**Returns:** *RTCRtpHeaderExtensionParameters*

Defined in: [webrtc/src/extension/rtpExtension.ts:11](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/extension/rtpExtension.ts#L11)

___

### useSdesRTPStreamID

▸ **useSdesRTPStreamID**(): *RTCRtpHeaderExtensionParameters*

**Returns:** *RTCRtpHeaderExtensionParameters*

Defined in: [webrtc/src/extension/rtpExtension.ts:17](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/extension/rtpExtension.ts#L17)

___

### useTransportWideCC

▸ **useTransportWideCC**(): *RTCRtpHeaderExtensionParameters*

**Returns:** *RTCRtpHeaderExtensionParameters*

Defined in: [webrtc/src/extension/rtpExtension.ts:23](https://github.com/shinyoshiaki/werift-webrtc/blob/92b5725/packages/webrtc/src/extension/rtpExtension.ts#L23)