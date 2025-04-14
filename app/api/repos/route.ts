import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/ctvnjhnrmmlp/repos`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      return NextResponse.json(
        {
          message: 'Repositories fetched.',
          data,
        },
        { status: 200 }
      );
    }

    throw new Error();
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
