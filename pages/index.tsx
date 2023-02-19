import React from "react";
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
import { useEncodeMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";

const ConvertUrl = Yup.object().shape({
  url: Yup.string()
    .min(3, "Username is too short.")
    .max(50, "Username is too long.")
    .required("URL is required"),
});

function Index() {
  const [
    encode,
    // loading
  ] = useEncodeMutation();

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} boxShadow="2xl">
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
            console.log(values);
            const response = await encode({
              variables: {
                url: values.url,
              },
            });

            if (response.data?.encode.errors) {
              setErrors(toErrorMap(response.data.encode.errors));
            } else if (response.data?.encode.url) {
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
    </Stack>
  );
}

export default withApollo({ ssr: true })(Index);
