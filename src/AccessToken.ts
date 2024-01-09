class AccessToken {
  accessToken: string | undefined;

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(accessToken: string | undefined) {
    this.accessToken = accessToken;
  }
}

const AccessTokenSingleton = new AccessToken();

export { AccessTokenSingleton as AccessToken };
