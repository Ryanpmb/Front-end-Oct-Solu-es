import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode"
import Cookies from "js-cookie";


const publicRoutes = [
    { path: "/Login", whenAutenticated: "redirect" },
    { path: "/Register", whenAutenticated: "redirect" },
    { path: "/", whenAutenticated: "next" },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login"

export default function middlewate(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const publicRoute = publicRoutes.find(route => route.path === path);
    const authToken = request.cookies.get("access_token");

    if (!authToken && publicRoute) {
        return NextResponse.next()
    }

    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAutenticated === "redirect") {
        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = "/DashBoard"

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && !publicRoute){
        const token = Cookies.get("access_token")

        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;

        if(token){
            const decode = jwtDecode(token)

            const currentTime = Math.floor(Date.now() / 1000)

            if(decode.exp){
                return decode.exp > currentTime ? NextResponse.next() : NextResponse.redirect(redirectUrl)
            }

            return NextResponse.redirect(redirectUrl)
          

        }
        

    }

    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
}