import { FieldValues, UseFormSetError } from "react-hook-form";
import { ValidationError } from "../types/ValidationError";

export const refineAndSetError = async <
  TFieldValues extends FieldValues = FieldValues
>({
  error,
  setError,
}: {
  error: any;
  setError: UseFormSetError<TFieldValues>;
}) => {
  error.graphQLErrors[0].extensions.validationErrors.forEach(
    (validationError: ValidationError<TFieldValues>) => {
      Object.values<string>(validationError.constraints).forEach(
        (message: string) => {
          setError(validationError.property, { type: "custom", message });
        }
      );
    }
  );
};
