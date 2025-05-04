import { NextRequest, NextResponse } from "next/server";

// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";

// const redis = new Redis({
//   url: "http://mi-db.redis.cache.windows.net",
//   token: "79S0rQ8zljEhuCl6Cvnajsmq5j2QJte5CAzCaKmTUo4=",
// });

// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.slidingWindow(50, "10 s"),
// });

export async function middleware(request: NextRequest) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  // const ip = request.ip ?? "127.0.0.1";
  // const { success, pending, limit, reset, remaining } = await ratelimit.limit(
  //   ip
  // );

  // return success || ip === "127.0.0.1"
  return NextResponse.next({ headers });
  // ?
  // : NextResponse.json({
  //     message: "Rate limit exceeded",
  //   });
}

export const config = {
  matcher: ["/((?!logo.png).*)"],
};