import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { connectToDatabase } from "./utils";
import { User } from "@/utils/models";
import { authConfig } from "@/utils/auth.config";


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut }
    = NextAuth({
    ...authConfig,
    providers:
    [ Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // console.log("Sign In:", user, account, profile);
            if (account.provider === "github") {
                connectToDatabase();
                try {
                    const dbUser = await User.findOne({ email: profile.email });

                    if (!dbUser) {
                        const dbUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        });
                        await dbUser.save();
                        console.log("New User Created:", newUser);
                    }

                    user.isAdmin = dbUser.isAdmin;

                } catch (error) {
                    console.log("Error:", error);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
});