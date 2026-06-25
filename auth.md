# Auth.md

You are an agent. This service supports **agentic registration**: discover → register → (claim if needed) → exchange for an access_token → call API → handle revocation. Follow the steps in order; do not skip ahead.

Examples use placeholder hosts: `https://tamnguyen-portfolio.vercel.app` (the resource server hosting the API you want to call) and `https://tamnguyen-portfolio.vercel.app` (the authorization server that handles registration).

## Step 1 — Discovery

Conventional path on the resource server is `/.well-known/oauth-protected-resource`.

```http
GET /.well-known/oauth-protected-resource
```

Response:
```json
{
  "resource": "https://tamnguyen-portfolio.vercel.app",
  "resource_name": "Tam Nguyen Portfolio",
  "resource_logo_uri": "",
  "authorization_servers": ["https://tamnguyen-portfolio.vercel.app"],
  "scopes_supported": ["read"],
  "bearer_methods_supported": ["header"]
}
```
