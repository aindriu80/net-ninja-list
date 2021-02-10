import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1);
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | 404 </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Oooops....</h1>
        <h2>That page can't be found</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>HomePage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
