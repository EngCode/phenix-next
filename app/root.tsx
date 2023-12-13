//====> Remix Base Components <====//
import {LinksFunction} from "@remix-run/node";
import {Links, LiveReload, Meta, Scripts, ScrollRestoration} from "@remix-run/react";

//====> Phenix Design System <====//
import PhenixCSS from "./css/phenix.css";

//====> Importing CSS Fonts <====//
import FontAwesome from "./webfonts/fontawesome-6.css";
import SomarRounded from "./webfonts/somar-rounded.css";

//====> Loading CSS Files <====//
export const links: LinksFunction = () => [
    //===> Phenix CSS <===//
    { rel: "stylesheet", href: PhenixCSS },
    //===> FontAwesome <===//
    { rel: "stylesheet", href: FontAwesome },
    //===> SomarRounded <===//
    { rel: "stylesheet", href: SomarRounded },
];

//====> Render App Root <====//
export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta />
            <Links />
            <meta charSet="utf-8" />
            <title>Phenix Design System</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <div className="container pd-50">
                <h1>Hello Phenix from Remix JS - مرحباً فى نظام تصميم فينكس</h1>
            </div>
            <ScrollRestoration />
            <Scripts />
            {/* <LiveReload /> */}
        </body>
        </html>
    );
}
