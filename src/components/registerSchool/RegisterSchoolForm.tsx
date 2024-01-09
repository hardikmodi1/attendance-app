import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

import { Button } from "@rneui/themed";
import { TextInputField } from "../ui/formFields/TextInputField";

import { useRegisterSchoolMutation } from "../../../generated/graphql";

import type { FormValues } from "./registerSchoolSchema";

import { RegisterSchoolSchema } from "./registerSchoolSchema";
import { refineAndSetError } from "../../utils/refineAndSetError";

export const RegisterSchoolForm = () => {
  const [registerSchool, { loading }] = useRegisterSchoolMutation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", address: "" },
    resolver: valibotResolver(RegisterSchoolSchema),
  });

  const onSubmit = useCallback(
    async (data: FormValues) => {
      try {
        await registerSchool({ variables: { registerInput: data } });
      } catch (error: any) {
        refineAndSetError({ error, setError });
      }
    },
    [registerSchool]
  );

  return (
    <View style={styles.container}>
      <TextInputField
        control={control}
        name="name"
        errorMessage={errors.name?.message}
        placeholder="e.g. JNV, Vadnagar"
        label="School Name"
      />
      <TextInputField
        control={control}
        name="email"
        placeholder="School email adress"
        keyboardType="email-address"
        label="Email Address"
        errorMessage={errors.email?.message}
      />
      <TextInputField
        control={control}
        name="address"
        placeholder="Enter complete address"
        multiline
        numberOfLines={4}
        label="Address"
        errorMessage={errors.address?.message}
      />
      <Button
        title="Register School"
        radius={8}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
});
