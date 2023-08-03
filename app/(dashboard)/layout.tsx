import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import '@/styles/global.scss'

export default function DashboardRootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

        <main className="h-screen w-screen candy-mesh p-6">
            <GlassPane className="w-full h-full flex items-center">
              <Sidebar />
                {children}
            </GlassPane>
            <div id="modal"></div>
        </main>

    )
  }