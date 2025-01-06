import { vi, describe, it, beforeEach, afterEach } from 'vitest';
import { loadEnvConfig } from '@next/env';
import { getAdoptableCats } from '@/utils/authenticate-pawlytics';

loadEnvConfig('.');

// TODO: spy on redis calls to see they're being done

const nullTokenFromRedis = () => ({});

const mockTokenFromRedis = () => ({
    access_token: 'redis_token',
    expiry: 1
});

const mockPawlyticsAuthResponse = () => ({
    access_token: 'response_token',
    expires_in: 86400
});

// describe('getPawlyticsAuthToken', () => {
//     beforeEach(() => {
//         vi.useFakeTimers();
//     });
//
//     afterEach(() => {
//         vi.useRealTimers();
//     });
//
//     it('should get auth token', async () => {
//         const token = await getPawlyticsAuthToken();
//         console.log(token);
//     });
// });

describe('getAdoptableCats', () => {
    it('should get all adoptable cats', async () => {
        const cats = await getAdoptableCats();
        console.log(cats)
    });
});