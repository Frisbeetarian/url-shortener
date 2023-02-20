import React from "react";
import { Flex } from "@chakra-ui/react";

function UrlItem({ originalUrl, shortUrl }) {
  return (
    <Flex justifyContent="space-between">
      <p className="">{originalUrl}</p>
      <a href={shortUrl} target="_blank">
        {shortUrl}
      </a>
    </Flex>
  );
}

export default UrlItem;
