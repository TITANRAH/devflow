"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

function SignUpPage() {
  return (
    <div>
      <AuthForm
        formType="SIGN-UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        // TODO: AUTHFORM REUTILIZABLE
        // ESTO ES UNA PROMESA QUE DICE QUE SE EJECUTA Y DICE QUE EL EXITO ES VERDADERO Y PASA LOS
        // DATOS DE LA SOLICITUD
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
}

export default SignUpPage;
