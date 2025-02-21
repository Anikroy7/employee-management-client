import { MainLayout } from "@/src/components/layout/MainLayout";
import "@/src/styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
