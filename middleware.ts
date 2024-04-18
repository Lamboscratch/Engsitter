import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
    const cspHeader = `
        default-src 'self' https://www3.doubleclick.net/ https://marketingplatform.google.com/about/enterprise/;
        script-src 'self' 'nonce-${nonce}' 'sha256-eMuh8xiwcX72rRYNAGENurQBAcH7kLlAUQcoOri3BIo=' 'sha256-10/0FESKC8299B5TCE+dGDo0JdZcRdny7kTczowOIYE=' giscus.app analytics.umami.is;
        style-src 'self' 'sha256-jUf+GtHxjTTTtqEHmSnVBpcHE67W4pMA+IZfBvqzwYo=';
        font-src 'self';
        form-action 'self';
        frame-ancestors 'none';
        frame-src giscus.app
    `;

    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);

    requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

    return response;
}
