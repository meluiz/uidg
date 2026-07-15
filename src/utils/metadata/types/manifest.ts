export type Manifest = {
  id?: string;
  name?: string;
  lang?: string;
  scope?: string;
  icons?: Icon[];
  dir?: Direction;
  display?: Display;
  start_url?: string;
  description?: string;
  short_name?: string;
  theme_color?: string;
  categories?: string[];
  shortcuts?: Shortcut[];
  orientation?: Orientation;
  background_color?: string;
  share_target?: ShareTarget;
  screenshots?: Screenshot[];
  launch_handler?: LaunchHandler;
  file_handlers?: FileHandlers[];
  display_override?: DisplayOverride[];
  prefer_related_applications?: boolean;
  protocol_handlers?: ProtocolHandler[];
  related_applications?: RelatedApplication[];
};

type Icon = {
  src: string;
  type?: string;
  sizes?: string;
  purpose?: Purpose;
};

type Purpose = 'any' | 'maskable' | 'monochrome';

type Direction = 'ltr' | 'rtl' | 'auto';
type Display = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';

type Shortcut = {
  url: string;
  name: string;
  icons?: Icon[];
  short_name?: string;
  description?: string;
};

type Orientation =
  | 'any'
  | 'natural'
  | 'landscape'
  | 'portrait'
  | 'portrait-primary'
  | 'portrait-secondary'
  | 'landscape-primary'
  | 'landscape-secondary';

type ShareTarget = {
  action: string;
  method?: Method;
  params: Params;
  enctype?: Enctype;
};

type Method = 'get' | 'post' | 'GET' | 'POST';

type Params = {
  title?: string;
  text?: string;
  url?: string;
  files?: File | File[];
};

type File = {
  name: string;
  accept: string | string[];
};

type Enctype = 'application/x-www-form-urlencoded' | 'multipart/form-data';

type Screenshot = {
  label?: string;
  src: string;
  type?: string;
  sizes?: string;
  platform?: Platform;
  form_factor?: FormFactor;
};

type FormFactor = 'narrow' | 'wide';
type Platform =
  | 'android'
  | 'chromeos'
  | 'ipados'
  | 'ios'
  | 'kaios'
  | 'macos'
  | 'windows'
  | 'xbox'
  | 'chrome_web_store'
  | 'itunes'
  | 'microsoft-inbox'
  | 'microsoft-store'
  | 'play';

type LaunchHandler = {
  client_mode: ClientModeEnum | ClientModeEnum[];
};

type ClientModeEnum = 'auto' | 'focus-existing' | 'navigate-existing' | 'navigate-new';

type FileHandlers = {
  action: string;
  accept: Record<string, string[]>;
};

type DisplayOverride =
  | 'fullscreen'
  | 'standalone'
  | 'minimal-ui'
  | 'browser'
  | 'window-controls-overlay';

type ProtocolHandler = {
  url: string;
  protocol: string;
};

type RelatedApplication = {
  url: string;
  id?: string;
  platform: string;
};
