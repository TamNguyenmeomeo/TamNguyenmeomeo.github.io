export default function middleware(request) {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    const accept = request.headers.get('accept') || '';
    if (accept.includes('text/markdown')) {
      url.pathname = '/index.md';
      return Response.redirect(url, 302);
    }
  }
}
