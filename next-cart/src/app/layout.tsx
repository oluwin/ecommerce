import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"
import {CategoriesSidebar, ThemeProvider} from "@/components/components/commons"
import {ToastProvider} from "@/components/components/toaster"
import {Header, Footer} from "@/components/components/commons"
import {AuthProvider} from "@/components/providers/auth-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "NextCart - Your Online Store",
    description: "Discover amazing products at unbeatable prices",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>

            <div className="flex flex-1">
                <div className="hidden md:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto border-r">
                    <CategoriesSidebar/>
                </div>

                {/* Main content area */}
                <main className="flex-1 p-2">
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </main>
            </div>

            <Footer/>
            <ToastProvider/>
        </ThemeProvider>
        </body>
        </html>
    )
}