export type WebApplication = {
  name: string;
  url: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  browserRequirements?: string;
  featureList?: string | string[];
  author?: { name: string; url?: string };
};

export type SoftwareApplicationOptions = Partial<Omit<WebApplication, 'name' | 'url'>> & {
  name?: string;
  url?: string;
};
