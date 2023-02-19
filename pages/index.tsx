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

const ConvertUrl = Yup.object().shape({
  url: Yup.string()
    .min(3, "Username is too short.")
    .max(50, "Username is too long.")
    .required("URL is required"),
});

const Index = () => (
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
        onSubmit={async (values, {}) => {
          console.log(values);
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

export default Index;
