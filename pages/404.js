import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1)
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooooops.....</h1>
      <h2>That Page cannot be found</h2>
      <p>Go back to the</p>
      <Link href="/">
        <a>Homepage</a>
      </Link>
    </div>
  );
}
