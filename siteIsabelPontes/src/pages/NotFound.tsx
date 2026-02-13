export default function NotFound() {
  const handleNotFound = () => {
    setTimeout(() => {
      console.warn(
        'Página não encontrada. Redirecionando para a página inicial...',
      );
      window.location.href = '/';
    }, 3000);
  };
  handleNotFound();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-lg text-gray-500">
        A página que você está procurando não existe. Redirecionando para a
        página inicial...
      </p>
    </div>
  );
}
