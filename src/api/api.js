import axios from "axios";

class ApiRequest {
    #url;

    constructor() {
        this.#url = "http://localhost:3000";
    }

    getReviews() {
        return axios
            .get(this.#url + '/reviews')
            .then(response => {
                return response.data;
            })
    }

    addReview(newReview) {
        return axios
            .post(this.#url + '/reviews', newReview)
            .then(response => {
               return response;
            })
    }
}

const apiRequest = new ApiRequest();

export default apiRequest;
