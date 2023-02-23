import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../components/InputField";
import { Url, useEncodeMutation, useGetUrlsQuery } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";
import UrlItem from "../components/UrlItem";

const ConvertUrl = Yup.object().shape({
  url: Yup.string().min(3, "Url is too short.").required("URL is required"),
});

function Index() {
  const { data, loading: getUrlsLoading } = useGetUrlsQuery({
    skip: false,
    fetchPolicy: "network-only",
  });

  const [urls, setUrls] = useState<Url[] | []>([]);

  const [
    encode,
    // loading
  ] = useEncodeMutation();

  useEffect(() => {
    if (data?.getUrls && data?.getUrls.length !== 0) {
      setUrls(data?.getUrls);
    }
  }, [data?.getUrls]);

  return (
    <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6} boxShadow="2xl">
      <Stack align={"start"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          URL Shortener
        </Heading>
      </Stack>

      <Box boxShadow={"lg"} p={8} className="border bg-black">
        <Formik
          initialValues={{ url: "" }}
          validationSchema={ConvertUrl}
          onSubmit={async (values, { setErrors }) => {
            const response = await encode({
              variables: {
                url: values.url,
              },
            });

            if (
              response.data?.encode.errors &&
              response.data?.encode.errors.length !== 0
            ) {
              setErrors(toErrorMap(response.data.encode.errors));
            } else if (response.data?.encode.url) {
              // @ts-ignore
              setUrls((prevState: Url[] | []) => {
                return [...prevState, response.data?.encode.url];
              });
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="url" isRequired>
                      <FormLabel>URL to shorten</FormLabel>

                      <InputField name="url" placeholder="url" label="" />
                    </FormControl>
                  </Box>
                </HStack>

                <Stack spacing={10} pt={2}>
                  <Button
                    className="w-1/2 ml-auto"
                    type="submit"
                    size="md"
                    bg={"green.400"}
                    color={"white"}
                    _hover={{
                      bg: "green.900",
                    }}
                    isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>

      {!getUrlsLoading && urls && urls.length !== 0 ? (
        <Stack className="flex flex-col">
          {urls.map((url, i) => (
            <UrlItem
              key={i}
              originalUrl={url.originalUrl}
              shortUrl={url.shortUrl}
            />
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}

export default withApollo({ ssr: true })(Index);
