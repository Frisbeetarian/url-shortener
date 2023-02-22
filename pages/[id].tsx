import { useEffect } from "react";
import { useDecodeMutation } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

function ShortUrlPage() {
  const [ decode, loading: decodeLoading ] = useDecodeMutation();

  useEffect( () => {
    const id = window.location.pathname; // returns relative path, without domain name
    console.log("id:", id);

    if (id) {
      sendDecodeRequest(id)
    }
  }, [])

  const sendDecodeRequest = async (id) => {
    const response = await decode({
      variables: {
        url: id.split("/").pop() as string,
      },
    });

    if (response) {
      window.location.replace(response.data?.decode.originalUrl as string)
    }
  }
}

export default withApollo({ ssr: true })(ShortUrlPage);
