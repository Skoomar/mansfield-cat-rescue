import { describe, it } from 'vitest';
import { loadEnvConfig } from '@next/env';
import { getPawlyticsAuthToken } from '@/utils/authenticate-pawlytics';

loadEnvConfig('.');
describe('getPawlyticsAuthToken', () => {
    it('should get auth token', async () => {
        const token = await getPawlyticsAuthToken();
        console.log(token);
    });
});

