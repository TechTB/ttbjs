/**
 * TTB-JS
 * TechTB JavaScript Utility Library
 * HTTP Utilities
 * Version 0.0.1
 */

// Adds 'http://' if valid URL
export function urlAddHttp(url) {
    try {
        if (str === null || !urlIsValid(str)) {
            throw `Invalid input.`;
        };
        if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
            url = "http://" + url
        }
        return url;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Adds 'https://' if valid URL
export function urlAddHttps(url) {
    try {
        if (str === null || !urlIsValid(str)) {
            throw `Invalid input.`;
        };
        if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
            url = "https://" + url
        }
        return url;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Simple GET request
// NEEDS REVIEW
export async function reqGetJson(url) {
    try {
        const resp = await fetch(url, { method: 'GET' });
        if (!resp.ok) {
            throw `${resp.status} - ${resp.statusText}`;
        }
        return resp;
    } catch (er) {
        console.error(er);
        return false;
    }
}

// Simple POST request. export function is expecting JSON data. The JSON.parse will throw an error if data is not valid JSON.
// NEEDS REVIEW
export async function reqPostJSON(url, dataJson) {
    try {
        if (dataJson === null || dataJson === undefined) {
            throw `No JSON data provided`;
        }
        JSON.parse(dataJson);
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJson
        });
        if (!resp.ok) {
            throw `${resp.status} - ${resp.statusText}`;
        }
        return resp;
    } catch (er) {
        console.error(er);
        return false;
    }
}
// Simple POST request. export function is expecting FormData.
// NEEDS REVIEW
export async function reqPostForm(url, dataForm) {
    try {
        if (!(dataForm instanceof FormData)) {
            throw `The data provided was not form data`;
        }
        const resp = await fetch(url, {
            method: 'POST',
            body: dataForm
        });
        if (!resp.ok) {
            throw `${resp.status} - ${resp.statusText}`;
        }
        return resp;
    } catch (er) {
        console.error(er);
        return false;
    }
}