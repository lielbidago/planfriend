import GlassPane from "@/components/GlassPane";
import '@/styles/global.scss'

export default function AuthRootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="h-screen w-screen rainbow-mesh p-6">
            <GlassPane className="w-full h-full flex items-center justify-center">
                {children}
            </GlassPane>
        </main>

    )
  }