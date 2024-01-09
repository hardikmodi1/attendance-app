import { useCallback } from "react";
import { Button, Text } from "@rneui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { minLength, object, Output, string } from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextInputField } from "../../src/components/ui/formFields/TextInputField";

import { useCompleteSetupMutation } from "../../generated/graphql";

import { refineAndSetError } from "../../src/utils/refineAndSetError";
import { AccessToken } from "../../src/AccessToken";

const VerifySchoolSchema = object({
  headName: string("Head name is required."),
  password: string("Password is required", [
    minLength(6, "Password should be atleast 6 characters long."),
  ]),
  token: string("School setup is already done, or link has expired."),
});

type FormValues = Output<typeof VerifySchoolSchema>;

export default function CompleteSchoolSetup() {
  const { token } = useLocalSearchParams<{ token: string }>();
  const [completeSetup, { loading }] = useCompleteSetupMutation();
  const { push } = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { headName: "", password: "", token },
    resolver: valibotResolver(VerifySchoolSchema),
  });

  const onSubmit = useCallback(
    async (formValues: FormValues) => {
      try {
        const { data } = await completeSetup({
          variables: { completeSetupInput: formValues },
        });
        AccessToken.setAccessToken(data?.completeSetup.accessToken);
        const refreshToken = data?.completeSetup.refreshToken;
        if (refreshToken) {
          await AsyncStorage.setItem(
            "@attendance/refresh-token",
            data?.completeSetup.refreshToken
          );
          push("/(auth)/dashboard");
        } else {
          await AsyncStorage.removeItem("@attendance/refresh-token");
        }
      } catch (error: any) {
        refineAndSetError({ error, setError });
      }
    },
    [completeSetup]
  );

  return (
    <View style={styles.container}>
      <TextInputField
        control={control}
        name="headName"
        errorMessage={errors.headName?.message}
        placeholder="Enter name"
        label="Head Name"
      />
      <TextInputField
        control={control}
        name="password"
        placeholder="Enter password"
        label="Password"
        errorMessage={errors.password?.message}
      />
      <TextInputField
        containerStyle={{ display: "none" }}
        control={control}
        name="token"
        errorMessage={errors.token?.message}
      />

      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errors.token?.message}</Text>
      </View>
      <Button
        title="Complete Setup"
        radius={8}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: "center", flex: 1 },
  errorText: { color: "rgb(255,25,12)" },
  errorContainer: { marginBottom: 4 },
});
