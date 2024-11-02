

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
// TODO: AUTHENTICATION CON GITHUB

// 1. ENTRAR A GITHUB Y BUSCAR DEVELOPER Settings
// 2. LUEGO OAUTH APPS
// 3. NEW OAUTH APP
// 4. LLENAR LOS CAMPOS
// 5. URL DE LA APP: http://localhost:3000
// 6. URL DE AUTH: http://localhost:3000/api/auth/callback/github
// 7. CREAR APP DARLE UN NOMBRE 
// 8. COPIAR EL CLIENT ID Y EL CLIENT SECRET
// 9. CREAR UN ARCHIVO .env.local
// 10. PEGAR LAS VARIABLES DE ENTORNO 
// 11. EN ESTE ARCHIVO DE AUTG LLAMADR A GITHUB COMO PROVIDER

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
})