// Build-time helpers for pulling a repo's README from GitHub and rewriting
// its relative links/images to absolute GitHub URLs so it renders correctly
// off-repo.

import type { ProjectEntry } from '../data/projects';

export interface ReadmeResult {
  markdown: string;
  fetchedAt: string;
  ok: boolean;
  error?: string;
}

/** Rewrite relative markdown links/images to absolute GitHub URLs. */
export function rewriteRelativeLinks(markdown: string, owner: string, repo: string, branch: string): string {
  const rawBase = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`;
  const blobBase = `https://github.com/${owner}/${repo}/blob/${branch}/`;

  const isAbsolute = (url: string) =>
    /^([a-z][a-z0-9+.-]*:)?\/\//i.test(url) || url.startsWith('#') || url.startsWith('mailto:');

  // Images: ![alt](path) -> rewrite to raw.githubusercontent.com so the bytes load.
  let out = markdown.replace(/(!\[[^\]]*\]\()([^)\s]+)(\s*\))/g, (match, pre, url, post) => {
    if (isAbsolute(url)) return match;
    const clean = url.replace(/^\.\//, '');
    return `${pre}${rawBase}${clean}${post}`;
  });

  // Links: [text](path) -> rewrite to the GitHub blob view (not raw, so directories/pages work).
  out = out.replace(/(?<!!)(\[[^\]]*\]\()([^)\s]+)(\s*\))/g, (match, pre, url, post) => {
    if (isAbsolute(url)) return match;
    const clean = url.replace(/^\.\//, '');
    return `${pre}${blobBase}${clean}${post}`;
  });

  // Raw HTML <img src="...">
  out = out.replace(/(<img[^>]+src=["'])([^"']+)(["'])/g, (match, pre, url, post) => {
    if (isAbsolute(url)) return match;
    const clean = url.replace(/^\.\//, '');
    return `${pre}${rawBase}${clean}${post}`;
  });

  return out;
}

export async function fetchProjectReadme(project: ProjectEntry): Promise<ReadmeResult> {
  const url = `https://raw.githubusercontent.com/${project.owner}/${project.repo}/${project.branch}/README.md`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return {
        markdown: '',
        fetchedAt: new Date().toISOString(),
        ok: false,
        error: `${res.status} ${res.statusText}`,
      };
    }
    const raw = await res.text();
    const markdown = rewriteRelativeLinks(raw, project.owner, project.repo, project.branch);
    return { markdown, fetchedAt: new Date().toISOString(), ok: true };
  } catch (err) {
    return {
      markdown: '',
      fetchedAt: new Date().toISOString(),
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
