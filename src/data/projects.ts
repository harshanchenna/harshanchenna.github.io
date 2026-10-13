// Projects shown on the site. Each README is fetched at build time from
// raw.githubusercontent.com/<owner>/<repo>/<branch>/README.md.

export interface ProjectEntry {
  /** URL slug, e.g. /projects/mcp-semantic-scholar/ */
  slug: string;
  /** GitHub repo owner. */
  owner: string;
  /** GitHub repo name. */
  repo: string;
  /** Default branch to fetch the README from. */
  branch: string;
  /** Short one-line description shown on the project list. */
  blurb: string;
}

export const projects: ProjectEntry[] = [
  {
    slug: 'trellis',
    owner: 'harshanchenna',
    repo: 'trellis',
    branch: 'main',
    blurb: 'A self-improving personal agent for Claude Code: skills, a tiered knowledge base, scheduled jobs, and multi-session teamwork.',
  },
  {
    slug: 'tideline',
    owner: 'harshanchenna',
    repo: 'tideline',
    branch: 'main',
    blurb: 'A git log of the AI industry: models, MCP servers, packages, outages and team-building, diffed daily from public sources.',
  },
  {
    slug: 'finquorum',
    owner: 'harshanchenna',
    repo: 'finquorum',
    branch: 'main',
    blurb: 'Agent-native finance ledger MCP server: the agent proposes, a human approves, then it applies.',
  },
  {
    slug: 'returnscribe',
    owner: 'harshanchenna',
    repo: 'returnscribe',
    branch: 'main',
    blurb: 'MCP server that turns tax documents into an explained draft US federal return, built on tenforty. Not tax advice.',
  },
  {
    slug: 'verbcut',
    owner: 'harshanchenna',
    repo: 'verbcut',
    branch: 'main',
    blurb: 'Transcript-based video editor: delete words and the footage gets cut. Runs locally on whisper and ffmpeg.',
  },
  {
    slug: 'passagekeep',
    owner: 'harshanchenna',
    repo: 'passagekeep',
    branch: 'main',
    blurb: 'Local-first library for e-reader highlights (Kindle My Clippings.txt): search, tags, spaced repetition, Markdown export.',
  },
  {
    slug: 'mcp-semantic-scholar',
    owner: 'harshanchenna',
    repo: 'mcp-semantic-scholar',
    branch: 'main',
    blurb: 'MCP server for Semantic Scholar: search 200M+ papers, trace citations, look up authors.',
  },
  {
    slug: 'mcp-reddit',
    owner: 'harshanchenna',
    repo: 'mcp-reddit',
    branch: 'main',
    blurb: 'MCP server for Reddit: 9 tools for browsing, searching and reading threads through the public JSON API.',
  },
  {
    slug: 'mcp-stalwart-mail',
    owner: 'harshanchenna',
    repo: 'mcp-stalwart-mail',
    branch: 'main',
    blurb: 'MCP server for sending email over SMTP. Works with Stalwart, Gmail, or any SMTP relay.',
  },
  {
    slug: 'pseudo2py',
    owner: 'harshanchenna',
    repo: 'pseudo2py',
    branch: 'main',
    blurb: 'A whiteboard that comes to life. Pseudocode in, runnable Python out.',
  },
];
