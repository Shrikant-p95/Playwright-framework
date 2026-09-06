
export class Environment {
    static async getUrl() {
        return process.env.BASE_URL || 'https://stage.manufacton.com';
    }
};
