import { Input, InputProps } from "@rneui/themed";
import { ReactElement } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

export const TextInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  ...inputProps
}: InputProps & {
  control: Control<TFieldValues>;
  name: TName;
}): ReactElement => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, value, ref } }) => (
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        ref={ref}
        {...inputProps}
      />
    )}
  />
);
