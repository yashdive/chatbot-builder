// LogPanel component displays a list of log entries
const LogPanel = ({ logs }) => {

  // This component will handle the log panel
  // It will display the last five logs
  return (
    <div className="p-6 h-full flex flex-col">
      {/* Container for log entries with vertical spacing and scroll */}
      <div className="space-y-4 overflow-y-auto pr-2">
        {/* Map through logs and render each log entry */}
        {logs.map((log, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 rounded-lg shadow-sm text-sm text-gray-700"
          >
            {/* Display log time */}
            <p>
              <strong className="text-blue-600">[{log.time}]</strong>
            </p>
            {/* Display model/brain name */}
            <p>
              <strong>Brain:</strong> {log.model}
            </p>
            {/* Display prompt */}
            <p>
              <strong>Prompt:</strong> {log.prompt}
            </p>
            {/* Display response */}
            <p>
              <strong>Response:</strong> {log.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogPanel;
