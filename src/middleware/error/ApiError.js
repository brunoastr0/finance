class ApiError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    static badRequest(msg) {
        return new ApiError(400, msg)
    }

    static internal(msg) {
        return new ApiError(500, msg)

    }

    static notFound(msg){
        return new ApiError(404, msg)
    }

    static unauthorizedRequest(msg){
        return new ApiError(403, msg)
    }
    
    static conflict(msg){
        return new ApiError(409, msg)
    }


}

module.exports = ApiError