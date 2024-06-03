import React from 'react';

const EmbedPreview = ({ embed }) => {
  return (
    <div className="max-w-lg mx-auto p-4 custom-bg-gray-800 custom-text-white custom-rounded-lg custom-shadow-md relative">
      <div className="flex items-center mb-4">
        <img src={embed.webhookAvatarUrl || 'https://via.placeholder.com/40'} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <div className="text-lg font-bold">{embed.webhookName || 'Webhook Name'}</div>
          <div className="text-sm text-gray-400">Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
      </div>
      <div className="mb-4">{embed.webhookMessage}</div>
      <div className="custom-border-left" style={{ borderColor: embed.color }}>
        {embed.author && (
          <div className="custom-flex custom-items-center mb-2">
            {embed.authorIconUrl && <img src={embed.authorIconUrl} alt="Author" className="w-8 h-8 rounded-full mr-2" />}
            <div>
              <strong className="text-blue-400">{embed.author}</strong>
              {embed.authorUrl && <a href={embed.authorUrl} className="block text-blue-300 text-sm">{embed.authorUrl}</a>}
            </div>
          </div>
        )}
        {embed.title && <h2 className="text-xl font-semibold mb-2">{embed.title}</h2>}
        {embed.description && <p className="mb-4">{embed.description}</p>}
        {embed.fields && embed.fields.length > 0 && (
          <div className="mb-4 custom-flex custom-flex-wrap">
            {embed.fields.map((field, index) => (
              <div key={index} className={`mb-2 ${field.inline ? 'custom-inline-block' : 'custom-block'}`} style={{ width: field.inline ? '45%' : '100%' }}>
                <strong>{field.name}</strong>
                <p className="text-sm">{field.value}</p>
              </div>
            ))}
          </div>
        )}
        {embed.imageUrl && <img src={embed.imageUrl} alt="Embed" className="mb-4 w-full" />}
        {embed.thumbnailUrl && (
          <img
            src={embed.thumbnailUrl}
            alt="Thumbnail"
            className="w-16 h-16 rounded-full absolute top-4 right-4"
          />
        )}
        {embed.footer && (
          <div className="mt-4 pt-2 border-t border-gray-700 custom-flex custom-items-center">
            {embed.footerIconUrl && <img src={embed.footerIconUrl} alt="Footer" className="w-6 h-6 rounded-full mr-2" />}
            <small>{embed.footer}</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmbedPreview;
