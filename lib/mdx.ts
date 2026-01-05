import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  author: string
  category: string
  tags: string[]
  image: string
  source: string
  sourceUrl: string
  language: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  try {
    // Читаємо всі файли з директорії posts
    const files = fs.readdirSync(postsDirectory)
    
    const posts = files
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const slug = file.replace('.mdx', '')
        const fullPath = path.join(postsDirectory, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // Парсимо frontmatter (метадані між ---)
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/
        const match = frontmatterRegex.exec(fileContents)
        
        if (!match) {
          return null
        }
        
        const frontmatterString = match[1]
        const content = fileContents.replace(frontmatterRegex, '').trim()
        
        // Парсимо YAML frontmatter
        const frontmatter: any = {}
        frontmatterString.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':')
          if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim()
            
            // Обробка різних типів значень
            if (value.startsWith('[') && value.endsWith(']')) {
              // Масив
              frontmatter[key.trim()] = value
                .slice(1, -1)
                .split(',')
                .map(v => v.trim().replace(/['"]/g, ''))
            } else {
              // Звичайне значення
              frontmatter[key.trim()] = value.replace(/['"]/g, '')
            }
          }
        })
        
        return {
          slug,
          ...frontmatter,
          content,
        } as BlogPost
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug) || null
}
