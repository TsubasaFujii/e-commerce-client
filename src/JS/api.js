const BASE_URL = 'https://fakestoreapi.com';

export async function get(endPoint, signal) {
    const url = BASE_URL + endPoint;

    const response = await fetch(url, { signal });
    
    if (response.ok) {
        const json = await response.json();
        return {data: json, status: response.ok};
    }
    
    return {status: response.ok};
}

export async function post(endPoint, signal, body) {
    const url = BASE_URL + endPoint;

    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(body),
        signal
    });

    // Blocker
    if (!response.ok) return {status: response.ok};
    const data = await response.json();
    return {
        data,
        status: response.ok
    };
}