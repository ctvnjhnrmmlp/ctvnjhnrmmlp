export class Repositories {
  static endpoint = `${process.env.BASE_URL}`;

  static async readRepositories(): Promise<GitHubRepositories | null> {
    try {
      const response = await fetch(`${this.endpoint}`);

      if (response.ok) {
        const data = await response.json();
        return data.data;
      }

      throw new Error();
    } catch (error) {
      return null;
    }
  }
}
