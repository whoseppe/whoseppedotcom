import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      style={{
        overflow: "hidden",
        backgroundColor: "#0D0D0D",
        height: "100%",
        width: "100%",
      }}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
