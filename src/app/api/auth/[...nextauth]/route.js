import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
const user = {
    id:'1',
    name:'ddd',
    email:'aaa@gmail.com',
    password:'1234'
}

export const authOptions = {

    secret:process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
   credentials: {
      email: { label: "Email", type: "email", placeholder: "info.@gmail.com" },
      password: { label: "Password", type: "password", placeholder:'******' }
    },
    async authorize(credentials, req) {
    
    console.log(credentials,'credentials')


    
      // Return null if user data could not be retrieved
      if(user){
        return user;
      }
      
      return null
    }
  })
    // ...add more providers here
  ],

 callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      if (url.startsWith(baseUrl)) {
        return url
      }
      return baseUrl
    },
  },


}


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };