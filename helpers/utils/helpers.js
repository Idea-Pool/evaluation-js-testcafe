import { t } from 'testcafe';

export const getCurrentlUrl = async () => {
    return await t.eval(() => window.location);
};