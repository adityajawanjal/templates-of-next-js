import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  res.cookies.set("my-cookie", "my-cookie-value", {
    path: "/",
    httpOnly: true,
  });
  return res;
}
