import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',
          
          credentials: {
            username: { label: "Email", type: "email", placeholder: "test@email.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            
            const res = await fetch("", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
      
            
            if (res.ok && user) {
              return user
            }
            
            return null
          }
        })
      ],
});

export { handler as GET, handler as POST }




//JSHysQxuQcqT4X8U4Ld2Gq04ySxaZJOyeecgIUhgMjfTsbt2spDbzKs50lMQtKd8