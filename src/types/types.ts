export type UserProfile = {
  country: string;
  display_name: string;
  email: string;

  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };

  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};

export type CurrentlyPlaying = {
  device: {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
    supports_volume: boolean;
  };

  repeat_state: string;
  shuffle_state: boolean;

  context?: {
    type: string;
    href: string;

    external_urls: {
      spotify: string;
    };

    uri: string;
    timestamp: number;
    progress_ms: number;
    is_playing: boolean;
  };

  item: Track;
};

export type Track = {
  album: {
    album_type: string; // album | single | compilation
    total_tracks: number;
    available_markets: string[];

    external_uris: {
      spotify: string;
    };

    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string; // year | month | day

    restrictions: {
      reason: string; // market | product | explicit
    };

    type: string;
    uri: string;
    artists: SimplifiedArtist[];
  };

  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;

  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };

  external_urls: {
    spotify: string;
  };

  href: string;
  id: string;
  is_playable: boolean;
  linked_from: any;

  restrictions: {
    reason: string;
  };

  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type Artist = {
  external_urls: {
    spotify: string;
  };

  followers: {
    href: string;
    total: number;
  };

  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type SimplifiedArtist = {
  external_urls: {
    spotify: string;
  };

  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Episode = {
  audio_preview_url: string | null;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;

  external_urls: {
    spotify: string;
  };

  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;

  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };

  type: string;
  uri: string;

  restrictions: {
    reason: string; // market | product | explicit
  };

  show: {
    available_markets: string[];
    copyrights: Copyright[];
    description: string;
    html_description: string;
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: string;
    uri: string;
    total_episodes: number;
  };

  currently_playing_type: string;

  actions: {
    interrupting_playback: boolean;
    pausing: boolean;
    resuming: boolean;
    seeking: boolean;
    skipping_next: boolean;
    skipping_prev: boolean;
    toggling_repeat_context: boolean;
    toggling_shuffle: boolean;
    toggling_repeat_track: boolean;
    transferring_playback: boolean;
  };
};

export type Copyright = {
  text: string;
  type: string;
};

export type RecentlyPlayed = {};
