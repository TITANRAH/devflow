import Image from "next/image";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 
    py-10 dark:bg-auth-dark"
    >
      <section
        className="light-border background-light800_dark200 shadow-light100_dark100 
      min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark200_light900">Disfruta DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              Puedes hacer tus consultas
            </p>
          </div>

          <Image
            width={50}
            height={50}
            alt="devflow logo"
            src="/images/site-logo.svg"
            className="object-contain"
          />
        </div>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
}