export const environment = {
  production: true,
  url: 'http://localhost:8080',
  get serverUrl(): string {
    return this.url;
  }
};
