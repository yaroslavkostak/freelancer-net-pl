import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Кнопка назад */}
          <Link href="/blog">
            <Button variant="outline" className="mb-8">
              ← Назад до блогу
            </Button>
          </Link>

          {/* Заголовок */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Метадані */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{Math.ceil(post.content.split(' ').length / 200)} хв читання</span>
          </div>

          {/* Теги */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Контент */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
            />
          </div>

          {/* Джерело */}
          {post.source && post.sourceUrl && (
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Джерело:</strong>{' '}
                <a 
                  href={post.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {post.source}
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Стаття перекладена та адаптована редакцією freelancer.org.pl для українських фрілансерів в Польщі.
              </p>
            </div>
          )}

          {/* Кнопка назад внизу */}
          <div className="mt-12">
            <Link href="/blog">
              <Button>
                ← Повернутись до блогу
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Проста функція для форматування Markdown в HTML
function formatMarkdown(content: string): string {
  // Заголовки
  content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  content = content.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  // Жирний текст
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  
  // Курсив
  content = content.replace(/\*(.*?)\*/g, '<em>$1</em>')
  
  // Посилання
  content = content.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
  
  // Списки
  content = content.replace(/^\- (.*$)/gim, '<li>$1</li>')
  content = content.replace(/(<li>.*<\/li>)/s, '<ul class="list-disc ml-6 my-4">$1</ul>')
  
  // Абзаци
  content = content.split('\n\n').map(para => {
    if (para.trim() && !para.startsWith('<')) {
      return `<p class="mb-4">${para}</p>`
    }
    return para
  }).join('\n')
  
  // Горизонтальна лінія
  content = content.replace(/^---$/gim, '<hr class="my-8 border-gray-300" />')
  
  return content
}
