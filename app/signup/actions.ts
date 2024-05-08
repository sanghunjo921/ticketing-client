"use server";

export interface SignUpActionState {
  errors: string[];
}

export const signupAction = async (
  prev: SignUpActionState,
  currentFormData: any
) => {
  console.log({
    prev,
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log({ currentFormData }, currentFormData.get("email"));
  return {
    errors: ["Invalid", "Type Error"],
  };
};
