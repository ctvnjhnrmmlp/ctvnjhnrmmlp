'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertCircle, Eye, GitFork, Star } from 'lucide-react';
import Link from 'next/link';

export const GithubRepoCard = (props: GitHubRepository) => {
  const formattedDate = new Date(props.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const languageColors: Record<string, string> = {
    'JavaScript': 'bg-yellow-300',
    'TypeScript': 'bg-blue-400',
    'Python': 'bg-green-500',
    'Java': 'bg-orange-500',
    'Ruby': 'bg-red-500',
    'Go': 'bg-cyan-400',
    'Rust': 'bg-amber-600',
    'C': 'bg-gray-500',
    'C++': 'bg-pink-500',
    'C#': 'bg-purple-500',
    'PHP': 'bg-indigo-400',
    'HTML': 'bg-orange-600',
    'CSS': 'bg-blue-500',
    'Shell': 'bg-green-600',
  };

  return (
    <Card className='w-full rounded-3xl backdrop-blur-sm bg-white/5 border-white/20 border-1 shadow-none overflow-hidden transition-all'>
      <CardHeader className='pb-2'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            <Avatar className='h-6 w-6'>
              <AvatarImage
                src={props.owner.avatar_url || '/placeholder.svg'}
                alt={props.full_name}
              />
              <AvatarFallback>{props.owner.avatar_url}</AvatarFallback>
            </Avatar>
            <span className='text-sm text-white'>{props.name}</span>
          </div>
          <Link
            href={props.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs text-white'
          >
            View on GitHub
          </Link>
        </div>
        <CardTitle className='text-lg font-bold mt-2'>
          <Link
            href={props.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white'
          >
            {props.name}
          </Link>
        </CardTitle>
        <CardDescription className='text-white line-clamp-2 h-10'>
          {props.description || 'No description provided'}
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-2'>
        {props.languages_url && (
          <div className='flex items-center gap-1 mb-2 text-white'>
            <span
              className={`inline-block h-3 w-3 rounded-full ${
                languageColors[props.language as string] || 'bg-gray-400'
              }`}
            />
            <span className='text-xs text-white'>{props.language}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-wrap items-center gap-4 pt-0 text-xs text-muted-foreground'>
        <div className='flex items-center gap-1'>
          <Star className='h-3.5 w-3.5 text-white' />
          <span className='text-white'>{props.stargazers_count}</span>
        </div>
        <div className='flex items-center gap-1'>
          <GitFork className='h-3.5 w-3.5 text-white' />
          <span className='text-white'>{props.forks_count}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Eye className='h-3.5 w-3.5 text-white' />
          <span className='text-white'>{props.watchers_count}</span>
        </div>
        {props.open_issues_count > 0 && (
          <div className='flex items-center gap-1'>
            <AlertCircle className='h-3.5 w-3.5 text-white' />
            <span className='text-white'>{props.open_issues_count}</span>
          </div>
        )}
        <div className='ml-auto text-xs text-white'>
          Updated on {formattedDate}
        </div>
      </CardFooter>
    </Card>
  );
};
