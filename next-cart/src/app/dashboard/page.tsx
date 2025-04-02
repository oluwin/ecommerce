import {auth} from "@/components/auth/auth";

export default async function Dashboard() {
    const session = await auth();

    return (
        <div>
            <h1>Welcome {session?.user?.email}</h1>
        </div>
    );
}