const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ccead5ec4eaa816f8a7c38872ced0174',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;