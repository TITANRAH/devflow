"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN-IN" | "SIGN-UP";
}

// TODO: AUTHFORM REUTILIZABLE
// CREAMOS UN SOLO COMPONENTE PARA EL FORMULARIO DE AUTENTICACIÓN Y PARA EL FORMULARUO DE REGISTRO
// DEGINIMOS LA INTERFACE Y LAS PROPS QUE VA A TENER EL COMPONENTE DE AuthForm
// LLAMAMOS A AUTHFORM Y LE PASAMOS EL ESQUEMA QUE CORRESPONDE Y LAS FUNCIONES QUE CORRESPONDE Y LOS VALORES POR DEFECTO
// DEPENDIENDO DEL TIPO DE FORM QUE SEA SIGN-IN O SIGN-UP

// AQUI EN EL COMPPONENTE DESTRUCUTRAMOS LOS CAMPOS QUE TRAE LA INTERFACE
// TAMBIEN HAY QUE DECIR QIE ESTE FORMULARIO EXTIENDE LOS VALOFES DEL CAMPO CON <T extends FieldValues>

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  // AHORA PODEMOS USAR LOS CAMPOS DE LA INTERFACE EN EL FORM PASNDOLE EL SCHEMA Y LOS VALORES
  // POR DEFECTO YA SEA DE SIGN-IN O SIGN-UP
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {
    // tarea: autenticar usuario
    onSubmit(form.getValues());
  };

  //  ESTO ESTA DETERMINADO POR EL VALOR QUE SE LE PASE AL CAMPO FORMTYPE EN LOS COMPONENTES DONDE SE USE
  // AUTHFORM
  const buttonText = formType === "SIGN-IN" ? "Inicia Sesión" : "Registrate";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className=" mt-10 space-y-6"
      >
       <h1 className="mt-10">{buttonText}</h1> 

        {/* COMO NECESITAMOS RENDEREIZAR LOS CAMPOS QUE CORRESPONDE A CADA FORM SIGN-IN O SIGN-UP 
        USAMOS EL EL DEFAULTVALUES QUE ES UN OBJETO QUE SE LE PASA EN CADA COMPONETE CON LOS CAMPOS NECESARIOS 
        Y LO RECORREMOS */}
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {/* TODO: AUTHFORM REUTILIZABLE 
          PODEMOS ACCEDER AL ESTADO DE UNA CON REACT HOOK FORM Y ESO NOS AYUDA A QUE EL BOTON PUEDA ESTAR 
          DESHBAILITADO MIENTRAS ESTA HACIENDO EL SUBMIT 
          CUANDO QUEREMOS ANULAR ALGUNAS PROPIEDADES DE ALGUN COMPONENTE DE SHADCN USAMOS EL SIGNO
          DE EXCLAMACION 
          */}
        <Button
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
          disabled={form.formState.isSubmitting}
        >
          {/* USAMOS NUEVAMENTE EL ESTADO DEL BOTON PARA CAMBIAR EL TEXTO DEPENDIENDO DE SI ESTA HACIENDO EL SUBMIT */}
          {form.formState.isSubmitting
            ? buttonText === "Inicia Sesión"
              ? "Iniciando Sesión..."
              : "Registrando..."
            : buttonText}
        </Button>

        {formType === "SIGN-IN" ? (
          <p>
            {" "}
            ¿No tienes una cuenta?{" "}

            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient"
            >
              Regístrate
            </Link>
          </p>
        ) : (
          <p>
            {" "}
            ¿Ya tienes una cuenta?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient"
            >
              Inicia Sesión
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
