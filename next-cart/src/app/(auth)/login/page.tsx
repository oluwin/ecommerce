'use client'

import {signIn} from "@/components/auth/auth";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });
        router.push("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}