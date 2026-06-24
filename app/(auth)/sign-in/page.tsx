import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sing in to GitHub Code Reviewer with your github account",
};

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

const SignInPage = async ({ searchParams }: SignInPageProps) => {
  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader className="items-center text-center">
        <div className="mb-6 justify-center pt-2">
          <Image
            src="/productlogo.svg"
            alt="Product mainlogo"
            width={100}
            height={100}
            priority
            className="text-foreground"
          />
        </div>
        <CardTitle className="text-base">Welcome back!</CardTitle>
        <CardDescription>
          Sing in with GitHub to review and manage your code
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldSet>
          <FieldGroup>
            <Field>
              <GitHubSignInForm callbackUrl={callbackUrl} />
              <FieldDescription>
                We only request the permission we needed to identify your
                account. You can revoke access anytime from GitHub settings.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </CardContent>
    </Card>
  );
};

export default SignInPage;
