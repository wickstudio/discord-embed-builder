import React, { useState } from 'react';
import EmbedEditor from './components/EmbedEditor';
import EmbedPreview from './components/EmbedPreview';
import Footer from './components/Footer';
import logo from './logo.png';

const App = () => {
  const [embed, setEmbed] = useState({
    title: '',
    description: '',
    author: '',
    authorUrl: '',
    authorIconUrl: '',
    footer: '',
    footerIconUrl: '',
    imageUrl: '',
    thumbnailUrl: '',
    color: '#237feb',
    fields: [],
    webhookUrl: '',
    webhookName: '',
    webhookAvatarUrl: '',
    webhookMessage: ''
  });

  const handleEmbedChange = (newEmbed) => {
    setEmbed(newEmbed);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <div className="animated-bg"></div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
        <h1 className="loading">Discord Embed Builder</h1>
        <div className="flex flex-col md:flex-row w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg shadow-md custom-shadow-md card-hover">
            <EmbedEditor onEmbedChange={handleEmbedChange} />
          </div>
          <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg shadow-md custom-shadow-md card-hover">
            <EmbedPreview embed={embed} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
