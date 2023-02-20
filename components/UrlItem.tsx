import React from "react";
import { Box } from "@chakra-ui/react";

function UrlItem({ originalUrl, shortUrl }) {
  return (
    <Box>
      <p>{originalUrl}</p>
      <p>{shortUrl}</p>
    </Box>
  );
}

export default UrlItem;
