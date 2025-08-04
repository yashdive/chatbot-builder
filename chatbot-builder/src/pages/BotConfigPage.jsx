import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import BotConfigForm from '../components/BotConfigForm'
import Spinner from '../components/Spinner';

const BotConfigPage = ({onSave}) => {

  //this is the Bot COnfiguration Page which will render the bot configuration form component
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleSave = (config) => {
      // This function will handle the saving of the bot configuration

    console.log("Bot configuration saved:", config);
    onSave(config);
    setLoading(true);
    setTimeout(() => {
        navigate("/chat")
    }, 2000)
  };
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
