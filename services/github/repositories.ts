export class Repositories {
  static endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

  static async readRepositories(): Promise<GitHubRepository[] | []> {
    try {
      const response = await fetch(`${this.endpoint}/repos`);

      if (response.ok) {
        const data = await response.json();
        return data.data;
      }

      throw new Error();
    } catch (error) {
      return [];
    }
  }
}
