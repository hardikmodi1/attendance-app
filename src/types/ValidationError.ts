import type { FieldPath, FieldValues } from "react-hook-form";

export type ValidationError<TFieldValues extends FieldValues> = {
  constraints: { [errorKey: string]: string };
  property: FieldPath<TFieldValues>;
};
