import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-gray-400 py-4 mt-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="mb-4 md:mb-0">
              &copy; 2024 Wick® Studio. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="https://discord.gg/wicks" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369a19.792 19.792 0 00-4.885-1.471.074.074 0 00-.078.037 13.975 13.975 0 00-.603 1.232 18.888 18.888 0 00-5.485 0 13.661 13.661 0 00-.614-1.232.073.073 0 00-.078-.037 19.78 19.78 0 00-4.885 1.471.07.07 0 00-.033.027C.533 9.238-.32 14.043.1 18.785a.085.085 0 00.031.056 20.132 20.132 0 005.993 3.034.077.077 0 00.083-.027 14.498 14.498 0 001.233-1.985.073.073 0 00-.041-.103 13.084 13.084 0 01-1.872-.891.076.076 0 01-.007-.133 10.097 10.097 0 002.355-1.878.074.074 0 01.115.008c.484.656 1.034 1.273 1.643 1.842a.073.073 0 01-.005.111c-.603.496-1.227.956-1.875 1.376a.074.074 0 00-.036.105c.36.654.769 1.295 1.217 1.906a.077.077 0 00.083.028 19.969 19.969 0 005.997-3.034.086.086 0 00.031-.056c.442-4.542-.699-9.326-3.848-13.017a.07.07 0 00-.034-.026zM8.02 15.331c-1.184 0-2.155-1.085-2.155-2.419 0-1.333.954-2.423 2.155-2.423 1.204 0 2.168 1.09 2.155 2.423-.013 1.334-.951 2.419-2.155 2.419zm7.959 0c-1.184 0-2.155-1.085-2.155-2.419 0-1.333.954-2.423 2.155-2.423 1.204 0 2.168 1.09 2.155 2.423-.013 1.334-.951 2.419-2.155 2.419z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@wick_studio" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.499 6.203a2.85 2.85 0 00-2.006-2.013C19.69 3.617 12 3.617 12 3.617s-7.69 0-9.493.573a2.85 2.85 0 00-2.006 2.013C0 8.007 0 12 0 12s0 3.993.501 5.797a2.85 2.85 0 002.006 2.013c1.803.573 9.493.573 9.493.573s7.69 0 9.493-.573a2.85 2.85 0 002.006-2.013C24 15.993 24 12 24 12s0-3.993-.501-5.797zM9.75 15.569V8.431L15.75 12l-6 3.569z"/>
                </svg>
              </a>
              <a href="https://github.com/wickstudio" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12a11.998 11.998 0 008.205 11.385c.6.111.82-.26.82-.577v-2.245c-3.338.725-4.042-1.44-4.042-1.44-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.73.083-.73 1.205.084 1.839 1.238 1.839 1.238 1.072 1.836 2.809 1.305 3.494.998.107-.776.419-1.306.763-1.607-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.468-2.381 1.236-3.222-.124-.303-.536-1.521.116-3.168 0 0 1.01-.323 3.307 1.229a11.49 11.49 0 013.013-.405c1.022.005 2.053.138 3.014.405 2.296-1.552 3.305-1.229 3.305-1.229.654 1.647.242 2.865.118 3.168.77.84 1.235 1.912 1.235 3.222 0 4.608-2.803 5.624-5.474 5.92.43.371.814 1.102.814 2.22v3.293c0 .32.218.694.825.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/wickstudio/yourrepo" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Source Code
              </a>
              <a href="https://discord.gg/wicks" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Support Server
              </a>
            </div>
          </div>
        </footer>
      );
    };

export default Footer;
