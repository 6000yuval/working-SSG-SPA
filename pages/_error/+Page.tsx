import { usePageContext } from 'vike-react/usePageContext';

export default function Page() {
  const pageContext = usePageContext();
  const statusCode = pageContext.abortStatusCode || (pageContext.is404 ? 404 : 500);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-black text-slate-900 mb-4">{statusCode}</h1>
        <p className="text-xl text-slate-600 mb-6">
          {statusCode === 404 ? 'העמוד שחיפשת לא נמצא.' : 'אירעה שגיאה. נסו שוב בעוד רגע.'}
        </p>
        <a href="/" className="inline-block px-5 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800">
          חזרה לעמוד הבית
        </a>
      </div>
    </main>
  );
}
