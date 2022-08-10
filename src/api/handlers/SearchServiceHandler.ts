import SearchNetworkService from "../services/SearchNetworkService";

export const search = async (place: string, onSuccess: (arg0: any) => void) => {
  SearchNetworkService.search(place)
    .then((result: any) => {
        onSuccess(result);
    })
    .catch((err: any) => {});
};

