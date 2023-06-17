class BaseService {
    _query(params: any) {
        const query = new URLSearchParams(params)
        return `?${query.toString()}`
    }
}

export default BaseService
