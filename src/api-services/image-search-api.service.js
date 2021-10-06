export class ImageSearchApiService {
  async searchImage(searchTerm) {
    const resp = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${searchTerm}&num=1&start=1&cx=96c9588c614d84cbb&imgSize=large&searchType=image`
    );

    return await resp.json();
  }
}

export const imageSearchApiService = new ImageSearchApiService();
