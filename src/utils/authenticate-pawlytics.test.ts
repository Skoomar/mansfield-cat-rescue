import { vi, describe, it, beforeEach, afterEach } from 'vitest';
import { loadEnvConfig } from '@next/env';
import { getPawlyticsAuthToken } from '@/utils/authenticate-pawlytics';

loadEnvConfig('.');

const getNullFromRedis = () => ({});

const getValidMockTokenFromRedis = () => ({
    access_token: 'redis_token',
    expiry: 1
});

const mockPawlyticsAuthResponse = () => ({
    access_token: 'response_token',
    expires_in: 86400
})

describe('getPawlyticsAuthToken', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should get auth token', async () => {
        const token = await getPawlyticsAuthToken();
        console.log(token);
    });
});

