export default function DashboardWrapper({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-6">
      <div className="rounded-3xl bg-slate-200/40 border border-slate-300 shadow-xl">
        {children}
      </div>
    </div>
  );
}
