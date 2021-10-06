import { imageSearchApiService } from "../api-services/image-search-api.service";

export class SearchFormFacade {
  async search(searchTerm) {
    try {
      const result = await imageSearchApiService.searchImage(searchTerm);
      if (result?.items?.length > 0) {
        return result?.items[0]?.link;
      } else {
        return "";
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}

export const searchFormFacade = new SearchFormFacade();
