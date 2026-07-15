export type Robots = {
  host?: string;
  sitemap?: string | string[];
  rules: Rule | Rule[];
};

export type Rule = RuleBase & {
  userAgent?: string | string[];
};

type RuleBase = {
  crawlDelay?: number;
  allow?: string | string[];
  disallow?: string | string[];
  other?: Record<string, string | number | (string | number)[]>;
};
