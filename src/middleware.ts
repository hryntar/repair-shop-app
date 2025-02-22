import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(async function middleware(req: NextRequest) {
   return NextResponse.next();
}, { isReturnToCurrentPage: true });

export const config = {
   matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|images|login|$).*)'
   ]
}
