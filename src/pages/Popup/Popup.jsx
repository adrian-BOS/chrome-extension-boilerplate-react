import * as React from "react";

const Popup = () => {
  const [apiKey, setApiKey] = React.useState("");

  React.useEffect(() => {
    const storedApiKey = localStorage.getItem("openAiApiKey");
    setApiKey(storedApiKey || "");
  }, []);

  const updateApiKeys = (apiKey) => {
    localStorage.setItem("openAiApiKey", apiKey);
    setApiKey(apiKey);
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="apiKey" className="form-label">API Key</label>
          <input type="text" name="apiKey" id="apiKey" placeholder="Enter your Open AI API Key" value={apiKey} onChange={(e) => updateApiKeys(e.target.value)} />
          <div className="form-text">
            You can get your API key from <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer">here</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Popup;
