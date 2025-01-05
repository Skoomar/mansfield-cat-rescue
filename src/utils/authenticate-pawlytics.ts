// TODO: maybe move this file closer to the adoption page - don't think this code will be used elsewhere so it's probably safe to put it there rather than some random utils folder
import { Redis } from '@upstash/redis';

const fetchPawlyticsAuthResponse = async () => {
    // POST to get API token and calculate expiry time. store both in redis
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            audience: 'https://api.pawlytics.com',
            client_id: process.env.PAWLYTICS_CLIENT_ID,
            username: process.env.PAWLYTICS_USER,
            password: process.env.PAWLYTICS_PASSWORD,
            grant_type: 'password',
            scope: 'openid',
            responseType: 'token id_token',
        })
    };

    try {
        const response = await fetch('https://pawlytics.auth0.com/oauth/token', options);
        if (!response.ok) {
            throw new Error(`HTTP error when authenticating Pawlytics API! Status: ${response.status}; Error message: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error when authenticating Pawlytics API:', error);
        throw error;
    }
};

export const getPawlyticsAuthToken = async () => {
    const redis = Redis.fromEnv();
    const apiToken = await redis.hgetall('pawlytics_auth_token');

    if (apiToken && apiToken.expiry < Date.now()) {
        return apiToken.access_token;
    }

    try {
        const authResponse = await fetchPawlyticsAuthResponse();
        await redis.hset('pawlytics_auth_token', {
            'access_token': authResponse['access_token'],
            'expiry': authResponse['expires_in'] + Date.now()
        });
        return authResponse['access_token'];
    } catch (error) {
        console.error('Error in fetchPawlyticsAuthResponse:', error);
        throw new Error(`Error when fetching Pawlytics API authentication token: ${error.message}`);
    }
};


