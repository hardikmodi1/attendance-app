import { email, minLength, object, Output, string } from "valibot";

export const RegisterSchoolSchema = object({
  email: string("Please enter valid email.", [
    email("Please enter valid email."),
  ]),
  name: string([minLength(1, "School name is required.")]),
  address: string([minLength(1, "Address is required.")]),
});

export type FormValues = Output<typeof RegisterSchoolSchema>;
