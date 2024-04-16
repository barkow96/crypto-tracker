import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request) {
    const pathName = request.nextUrl.pathname;
    const token = request.nextauth.token;
    const url = request.url;

    function createUrlWithMessage(message: string) {
      const newUrl = new URL("/access-denied", url);
      newUrl.searchParams.set("message", message);
      return newUrl;
    }

    if (pathName.startsWith("/portfolio") && !token) {
      const newUrl = createUrlWithMessage(
        "You cannot see Portfolio until you log in!"
      );
      return NextResponse.rewrite(newUrl);
    }
    if (pathName.startsWith("/watchlist") && !token) {
      const newUrl = createUrlWithMessage(
        "You cannot see Watchlist until you log in!"
      );
      return NextResponse.rewrite(newUrl);
    }
    if (pathName.startsWith("/auth") && token) {
      return NextResponse.rewrite(new URL("/", url));
    }
  },
  { callbacks: { authorized: () => true } }
);

export const config = { matcher: ["/portfolio", "/watchlist", "/auth"] };
