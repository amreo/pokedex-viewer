module.exports = {
    devServer: {
        proxy: {
          '^/api': {
            target: 'https://db.pokemongohub.net',
            changeOrigin: true
          }
        }
      }
  };