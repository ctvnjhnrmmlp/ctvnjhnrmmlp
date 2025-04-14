'use client';

import { GithubRepoCard } from '@/components/Blocks/Cards/GithubRepoCard';

interface GithubRepoGridProps {
  repositories: GitHubRepository[];
  columns?: 1 | 2 | 3 | 4;
}

export default function GithubRepoGrid({
  repositories,
  columns = 3,
}: GithubRepoGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {repositories.map((repo, index) => (
        <GithubRepoCard key={index} {...repo} />
      ))}
    </div>
  );
}
