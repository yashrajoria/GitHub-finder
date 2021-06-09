class Github {
  constructor() {
    this.client_id = '988095581fe255fd62f5';
    this.client_secret = '658c9181ab418d99afb9e267eeb83e9bd58f2125';
    this.repos_count = 5;
    this.repos_sort = 'created asc'
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}