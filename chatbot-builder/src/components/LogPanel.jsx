const LogPanel = ({ logs }) => {
  return (
   <div className="p-6 h-full flex flex-col">
  <div className="space-y-4 overflow-y-auto pr-2">
    {logs.map((log, index) => (
      <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm text-sm text-gray-700">
        <p><strong className="text-blue-600">[{log.time}]</strong></p>
                <p><strong>Brain:</strong> {log.model}</p>

        <p><strong>Prompt:</strong> {log.prompt}</p>
        <p><strong>Response:</strong> {log.response}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default LogPanel;
