# Discord Embed Builder

![Preview](./preview.mp4)

A web-based application to create Discord embed messages using webhooks. Built with React and Tailwind CSS.

## Features

- Create and preview Discord embeds in real-time
- Customize webhook name, avatar, and content
- Add fields, author, footer, images, and thumbnails to embeds
- Dark mode interface with a modern and responsive design
- Animated background for a dynamic look
- Easy to use and deploy

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wickstudio/discord-embed-builder.git
   cd discord-embed-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Fill in the webhook URL, name, and avatar URL at the top.
2. Customize your embed with title, description, author, footer, and other elements.
3. Preview your embed in real-time on the right side.
4. Click "Send Embed" to send your embed to the specified webhook.

## Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Discord Webhooks](https://discord.com/developers/docs/resources/webhook)

## Project Structure

```bash
discord-embed-builder
├── node_modules
├── public
│   ├── index.html
│   ├── logo.png
├── src
│   ├── components
│   │   ├── EmbedEditor.jsx
│   │   ├── EmbedPreview.jsx
│   │   └── Footer.jsx
│   ├── styles
│   │   └── index.css
│   ├── App.jsx
│   ├── index.jsx
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

- **GitHub**: [Wick Studio](https://github.com/wickstudio)
- **Youtube**: [@Youtube Channel](https://www.youtube.com/@wick_studio)
- **Discord**: [Support Server](https://discord.gg/wicks)

---

Made with ❤️ by [Wick® Studio](https://wickdev.xyz/)
