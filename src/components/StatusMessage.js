function StatusMessage({ title, text }) {
  return (
    <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 border border-gray-200 dark:border-slate-700 rounded-lg p-6 text-center">
      <p className="font-semibold m-0 mb-1">{title}</p>
      {text && <p className="text-gray-500 dark:text-slate-400 text-sm m-0">{text}</p>}
    </div>
  );
}

export default StatusMessage;
