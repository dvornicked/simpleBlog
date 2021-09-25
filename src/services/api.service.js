import config from '../../config.json'

class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + 'post.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            const response = await fetch(request)
            return await response.json()
        } catch (e) {
            console.error(e)
        }

    }
}

export const apiService = new ApiService(config['default-rtdb'])