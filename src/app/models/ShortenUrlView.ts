export interface ShortenUrlView {
  ok: boolean;
  result: ShortenUrlResultView;
}

export interface ShortenUrlResultView {
  code: string;
  full_share_link: string;
  full_short_link: string;
  original_link: string;
  share_link: string;
  short_link: string;
}
