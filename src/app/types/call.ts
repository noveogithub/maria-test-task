export interface Call {
  callId: number;
  channel: string;
  callStart: string;
  callEnd: string;
  callDuration: 0,
  dialingDuration: number;
  ivrDuration: 0,
  waitDuration: number;
  talkDuration: number;
  holdDuration: number;
  previewDuration: number;
  queue: string;
  campaign: string;
  service: string;
  contact: any,
  contactSessionId: string;
  callWrapups: any[],
  id: string;
}
