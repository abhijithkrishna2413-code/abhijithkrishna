export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Route based on path
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response('Welcome to Abhijith Portfolio', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    if (url.pathname === '/about' || url.pathname === '/about.html') {
      return new Response('About Me', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    if (url.pathname === '/contact' || url.pathname === '/contact.html') {
      return new Response('Contact Page', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    if (url.pathname === '/service' || url.pathname === '/service.html') {
      return new Response('Services', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    // Default: return 404 for other routes
    return new Response('Page not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};
