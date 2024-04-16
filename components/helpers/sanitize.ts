import sanitizeHtml from 'sanitize-html';

const SAFE_TAGS = [
  'address',
  'article',
  'aside',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'main',
  'blockquote',
  'p',
  'pre',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'br',
  'br/',
  'cite',
  'code',
  'dfn',
  'em',
  'i',
  'kbd',
  'mark',
  'q',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'u',
];

export default function sanitize (input: string): string {
  const sanitizerConfig = {
    allowedTags: SAFE_TAGS,
    disallowedTagsMode: 'discard',
    allowedAttributes: {
      span: ['class', 'id', 'role', 'aria-label', 'tabindex'],
    },
    selfClosing: ['br'],
    allowedSchemes: ['http'],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
    parseStyleAttributes: true,
  };

  return sanitizeHtml(input, sanitizerConfig);
}
