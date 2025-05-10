import Header from "@/components/Header.jsx";

export default function Home() {
  return (
    <div className="container py-4">
      <Header />
      <main>
        <h1 className="mt-4">Welcome to Honour Point</h1>
        <p className="lead">
          A Next.js project with Bootstrap 5.3.3 and shadcn using JavaScript.
        </p>
      </main>
    </div>
  );
}