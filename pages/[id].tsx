import { useEffect, useState } from "react";
import { useDecodeMutation } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

function ShortUrlPage() {
  const [
    decode,
    // loading: decodeLoading
  ] = useDecodeMutation();

  const [errorOnDecode, setErrorOnDecode] = useState(false);

  useEffect(() => {
    const id = window.location.pathname; // returns relative path, without domain name

    if (id) {
      sendDecodeRequest(id);
    }
  }, []);

  const sendDecodeRequest = async (id) => {
    const response = await decode({
      variables: {
        url: id.split("/").pop() as string,
      },
    });

    if (
      response.data?.decode.errors &&
      response.data?.decode.errors.length !== 0
    ) {
      setErrorOnDecode(true);
    } else if (response.data?.decode.originalUrl) {
      window.location.replace(response.data?.decode.originalUrl as string);
    }
  };

  return <div>{errorOnDecode && <p>Invalid URL.</p>}</div>;
}

export default withApollo({ ssr: true })(ShortUrlPage);
