import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <script
            defer
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
          ></script>
      </body>
    </Html>
  );
}
