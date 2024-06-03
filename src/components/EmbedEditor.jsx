import React, { useState } from 'react';

const EmbedEditor = ({ onEmbedChange }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [authorUrl, setAuthorUrl] = useState('');
  const [authorIconUrl, setAuthorIconUrl] = useState('');
  const [footer, setFooter] = useState('');
  const [footerIconUrl, setFooterIconUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [color, setColor] = useState('#237feb');
  const [fields, setFields] = useState([]);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookName, setWebhookName] = useState('');
  const [webhookAvatarUrl, setWebhookAvatarUrl] = useState('');
  const [webhookMessage, setWebhookMessage] = useState('');

  const handleFieldChange = (field, value) => {
    const updatedEmbed = {
      title,
      description,
      author,
      authorUrl,
      authorIconUrl,
      footer,
      footerIconUrl,
      imageUrl,
      thumbnailUrl,
      color,
      fields,
      webhookUrl,
      webhookName,
      webhookAvatarUrl,
      webhookMessage,
      [field]: value,
    };
    switch (field) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'authorUrl':
        setAuthorUrl(value);
        break;
      case 'authorIconUrl':
        setAuthorIconUrl(value);
        break;
      case 'footer':
        setFooter(value);
        break;
      case 'footerIconUrl':
        setFooterIconUrl(value);
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;
      case 'thumbnailUrl':
        setThumbnailUrl(value);
        break;
      case 'color':
        setColor(value);
        break;
      case 'webhookUrl':
        setWebhookUrl(value);
        break;
      case 'webhookName':
        setWebhookName(value);
        break;
      case 'webhookAvatarUrl':
        setWebhookAvatarUrl(value);
        break;
      case 'webhookMessage':
        setWebhookMessage(value);
        break;
      default:
        break;
    }
    onEmbedChange(updatedEmbed);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', value: '', inline: false }]);
  };

  const handleFieldNameChange = (index, name) => {
    const newFields = fields.slice();
    newFields[index].name = name;
    setFields(newFields);
    onEmbedChange({ title, description, author, authorUrl, authorIconUrl, footer, footerIconUrl, imageUrl, thumbnailUrl, color, fields: newFields, webhookUrl, webhookName, webhookAvatarUrl, webhookMessage });
  };

  const handleFieldValueChange = (index, value) => {
    const newFields = fields.slice();
    newFields[index].value = value;
    setFields(newFields);
    onEmbedChange({ title, description, author, authorUrl, authorIconUrl, footer, footerIconUrl, imageUrl, thumbnailUrl, color, fields: newFields, webhookUrl, webhookName, webhookAvatarUrl, webhookMessage });
  };

  const handleFieldInlineChange = (index, inline) => {
    const newFields = fields.slice();
    newFields[index].inline = inline;
    setFields(newFields);
    onEmbedChange({ title, description, author, authorUrl, authorIconUrl, footer, footerIconUrl, imageUrl, thumbnailUrl, color, fields: newFields, webhookUrl, webhookName, webhookAvatarUrl, webhookMessage });
  };

  const handleRemoveField = (index) => {
    const newFields = fields.slice();
    newFields.splice(index, 1);
    setFields(newFields);
    onEmbedChange({ title, description, author, authorUrl, authorIconUrl, footer, footerIconUrl, imageUrl, thumbnailUrl, color, fields: newFields, webhookUrl, webhookName, webhookAvatarUrl, webhookMessage });
  };

  const handleSendEmbed = async () => {
    const embed = {
      title,
      description,
      author: {
        name: author,
        url: authorUrl,
        icon_url: authorIconUrl,
      },
      footer: {
        text: footer,
        icon_url: footerIconUrl,
      },
      image: {
        url: imageUrl,
      },
      thumbnail: {
        url: thumbnailUrl,
      },
      color: parseInt(color.replace('#', ''), 16),
      fields: fields.map((field) => ({
        name: field.name,
        value: field.value,
        inline: field.inline,
      })),
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: webhookName,
          avatar_url: webhookAvatarUrl,
          content: webhookMessage,
          embeds: [embed],
        }),
      });

      if (response.ok) {
        alert('Embed sent to webhook successfully!');
      } else {
        alert('Failed to send embed to webhook.');
      }
    } catch (error) {
      console.error('Error sending embed to webhook:', error);
      alert('Error sending embed to webhook.');
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Edit Embed</h2>
      <div className="mb-4">
        <label className="block mb-2">Webhook Name <span className="text-sm text-gray-400">{webhookName.length}/80</span></label>
        <input
          type="text"
          placeholder="Webhook Name"
          value={webhookName}
          maxLength="80"
          onChange={(e) => handleFieldChange('webhookName', e.target.value)}
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <label className="block mb-2">Avatar URL</label>
        <input
          type="text"
          placeholder="Avatar URL"
          value={webhookAvatarUrl}
          onChange={(e) => handleFieldChange('webhookAvatarUrl', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <label className="block mb-2">Message Content</label>
        <textarea
          placeholder="Webhook Message Content"
          value={webhookMessage}
          onChange={(e) => handleFieldChange('webhookMessage', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Author <span className="text-sm text-gray-400">{author.length}/256</span></label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          maxLength="256"
          onChange={(e) => handleFieldChange('author', e.target.value)}
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Author URL"
          value={authorUrl}
          onChange={(e) => handleFieldChange('authorUrl', e.target.value)}
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Author Icon URL"
          value={authorIconUrl}
          onChange={(e) => handleFieldChange('authorIconUrl', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Title <span className="text-sm text-gray-400">{title.length}/256</span></label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          maxLength="256"
          onChange={(e) => handleFieldChange('title', e.target.value)}
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <label className="block mb-2">Description <span className="text-sm text-gray-400">{description.length}/4096</span></label>
        <textarea
          placeholder="Description"
          value={description}
          maxLength="4096"
          onChange={(e) => handleFieldChange('description', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Fields</label>
        <button onClick={handleAddField} className="btn-blue mb-4">Add Field</button>
        {fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">Field Name <span className="text-sm text-gray-400">{field.name.length}/256</span></label>
            <input
              type="text"
              placeholder="Field Name"
              value={field.name}
              maxLength="256"
              onChange={(e) => handleFieldNameChange(index, e.target.value)}
              className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
            <label className="block mb-2">Field Value <span className="text-sm text-gray-400">{field.value.length}/1024</span></label>
            <input
              type="text"
              placeholder="Field Value"
              value={field.value}
              maxLength="1024"
              onChange={(e) => handleFieldValueChange(index, e.target.value)}
              className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
            <label className="block mt-2 mb-2">
              <input
                type="checkbox"
                checked={field.inline}
                onChange={(e) => handleFieldInlineChange(index, e.target.checked)}
                className="mr-2"
              />
              Inline
            </label>
            <button onClick={() => handleRemoveField(index)} className="btn-red mt-2">Remove Field</button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Images</label>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => handleFieldChange('imageUrl', e.target.value)}
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnailUrl}
          onChange={(e) => handleFieldChange('thumbnailUrl', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Footer <span className="text-sm text-gray-400">{footer.length}/2048</span></label>
        <input
          type="text"
          placeholder="Footer"
          value={footer}
          maxLength="2048"
          onChange={(e) => handleFieldChange('footer', e.target.value)}
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Footer Icon URL"
          value={footerIconUrl}
          onChange={(e) => handleFieldChange('footerIconUrl', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => handleFieldChange('color', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Webhook URL</label>
        <input
          type="text"
          value={webhookUrl}
          onChange={(e) => handleFieldChange('webhookUrl', e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </div>
      <button onClick={handleSendEmbed} className="btn-green">Send Embed</button>
    </div>
  );
};

export default EmbedEditor;
