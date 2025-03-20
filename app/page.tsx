import ResponsiveNavigation from "@/components/responsive-navigation"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ResponsiveNavigation />
      <div className="container mx-auto px-4 mb-12  flex flex-col items-center justify-center gap-6 grow">
        <h1 className="text-4xl font-bold">Page Content</h1>
        <p>Lorem ipsum</p>
      </div>
    </main>
  )
}
