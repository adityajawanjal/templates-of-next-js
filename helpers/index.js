

export function checkAuth(req){
    const key = req.headers.cookie.split(';')[0];
    const token = key.split('=')[1];
    return req.user = token;
}