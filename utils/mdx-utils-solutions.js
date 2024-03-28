import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'solutions');

// solutionFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const solutionFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

  export const getSolutionsByNumber = (solutions) => {
    return solutions.sort((a, b) => a.data.number - b.data.number);
  };
  

  export const getSolutions = () => {
    let solutions = solutionFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);
  
      return {
        content,
        data,
        filePath,
      };
    });

  solutions = getSolutionsByNumber(solutions);

  return solutions;
};

export const getSolutionBySlug = async (slug) => {
  const solutionFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(solutionFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, solutionFilePath };
};

export const getNextSolutionBySlug = (slug) => {
  const solutions = getSolutions();
  const currentFileName = `${slug}.mdx`;
  const currentSolution = solutions.find((solution) => solution.filePath === currentFileName);
  const currentSolutionIndex = solutions.indexOf(currentSolution);

  // Change here: Increment index to get the next solution
  const solution = solutions[currentSolutionIndex + 1]; 
  if (!solution) return null; // no next solution found

  const nextSolutionSlug = solution.filePath.replace(/\.mdx?$/, '');

  return {
    title: solution.data.title,
    slug: nextSolutionSlug,
  };
};


export const getPreviousSolutionBySlug = (slug) => {
  const solutions = getSolutions();
  const currentFileName = `${slug}.mdx`;
  const currentSolution = solutions.find((solution) => solution.filePath === currentFileName);
  const currentSolutionIndex = solutions.indexOf(currentSolution);

  // Change here: Decrement index to get the previous solution
  const solution = solutions[currentSolutionIndex - 1]; 
  if (!solution) return null; // no previous solution found

  const previousSolutionSlug = solution.filePath.replace(/\.mdx?$/, '');

  return {
    title: solution.data.title,
    slug: previousSolutionSlug,
  };
};

