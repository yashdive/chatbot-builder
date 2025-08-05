import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import BotConfigForm from '../components/BotConfigForm'
import Spinner from '../components/Spinner';

// BotConfigPage component handles the bot configuration process
const BotConfigPage = ({onSave}) => {

  // State to manage loading spinner visibility
  const [loading, setLoading] = useState(false);
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Handles saving the bot configuration
  const handleSave = (config) => {
    // Log the configuration for debugging
    console.log("Bot configuration saved:", config);
    // Call the parent onSave handler
    onSave(config);
    // Show loading spinner
    setLoading(true);
    // Simulate async setup, then navigate to chat page
    setTimeout(() => {
        navigate("/chat")
    }, 2000)
  };

  return (
    <>
      {/* Render the navigation bar */}
      <Navbar />
      {/* Show spinner while loading, otherwise show the config form */}
      {loading ? (
        <Spinner message="Setting up your bot's brain..." />
      ) : (
        <BotConfigForm onSave={handleSave} />
      )}
    </>
  )
}

export default BotConfigPage
