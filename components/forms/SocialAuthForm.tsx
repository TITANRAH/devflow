"use client";

import Image from "next/image";
// TODO: IMPORTAR EL HOOK DE SESION DE REACT
import { signIn } from "next-auth/react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

function SocialAuthForm() {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded px-4 py-3.5";

  // TODO: LOGIN CON GITHUB, HAY QUE ENCERRAR LA APP COMPLETA EN SESSIONPROVIDER
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      // TODO: USO DE TOAST DE SHADCN

      // 1. CREAMOS EL TOAST EN ESTE CASO EN EL ERROR
      // 2. LE PASAMOS UN TITULO Y UNA DESCRIPCION
      // 3. LE PASAMOS UN VARIANT QUE ES EL COLOR DE FONDO
      // 4. EN ESTE CASO ES DESTRUCTIVE
      // 5. SI EL ERROR ES UNA INSTANCIA DE ERROR MOSTRAMOS EL MENSAJE
      // 6. SI NO MOSTRAMOS UN MENSAJE GENERICO
      // 7. LLAMAMOS A TOASTER EN EL LAYOUT PARA QUE SE MUESTRE
      toast({
        title: "Inicio de sesión fallido",
        description:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al iniciar sesión",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login in with GitHub</span>
      </Button>
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 
      min-h-12 flex-1 rounded px-4 py-3.5"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="google icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login in with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
