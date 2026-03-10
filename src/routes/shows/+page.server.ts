import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const load = async () => {
    const showsPath = path.resolve('shows');
    const files = fs.readdirSync(showsPath);

    const shows = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const content = fs.readFileSync(path.join(showsPath, file), 'utf-8');
            const { data } = matter(content);
            return {
                number: data.number,
                title: data.title,
                date: data.date,
                slug: file.replace('.md', '')
            };
        })
        .sort((a, b) => b.number - a.number);

    return { shows };
};