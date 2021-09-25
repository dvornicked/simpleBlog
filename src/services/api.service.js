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
            return useRequest(request)
        } catch (e) {
            console.error(e)
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(this.url + 'post.json')
            return useRequest(request)
        } catch (e) {
            console.error(e)
        }
    }

    async fetchPostById(id) {
        try {
            const request = new Request(this.url + `post/${id}.json`)
            return useRequest(request)
        } catch (e) {
            console.error(e)
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    return await response.json()
}

export const apiService = new ApiService(config['default-rtdb'])