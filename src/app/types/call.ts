export interface CallAgent {
  id: number;
  login: string;
}

export interface CallWrapup {
  agent: CallAgent;
  wrapupId: number;
  wrappedAt: string;
  wrapupComment: string;
  wrapupPath: string;
  wrapupName: string[];
  wrapupStatus: string;
}

export interface CallContact {
  id: number;
  phone: string;
}

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
  contact: CallContact,
  contactSessionId: string;
  callWrapups: CallWrapup[],
  id: string;
}
