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
      </body>
    </Html>
  );
}

// export async function getServerSideProps({ req }) {
//   if (req.headers.cookie) {
//     const { data } = await axios.get("http://localhost:3000/api/user", {
//       withCredentials: true,
//       headers: {
//         Cookie: req.headers.cookie,
//       },
//     });
//     console.log(data);
//     return { props: { data } };
//   }
//   return {
//     props: {
//       err: "Error",
//     },
//   };
// }
