import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, 'hello-world.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
}
