import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import BotConfigForm from '../components/BotConfigForm'
import Spinner from '../components/Spinner';

const BotConfigPage = ({onSave}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleSave = (config) => {
    console.log("Bot configuration saved:", config);
    onSave(config);
    setLoading(true);
    setTimeout(() => {
        navigate("/chat")
    }, 2000)
  };
    // This function will handle the saving of the bot configuration
  return (
    <>
      <Navbar />
      {loading ? (
        <Spinner message="Setting up your bot's brain..." />
      ) : (
        <BotConfigForm onSave={handleSave} />
      )}

    </>
  )
}

export default BotConfigPage
