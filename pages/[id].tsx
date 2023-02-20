import { useEffect } from "react";

function ShortUrlPage() {
  useEffect(() => {
    const id = window.location.pathname; // returns relative path, without domain name

    console.log("id:", id);

    if (id) {
    }
  }, []);
}

export default ShortUrlPage;
