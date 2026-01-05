import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  // Отримуємо всі статті з MDX файлів
  const mdxPosts = getAllPosts()
  
  // Старі статті (хардкод) - залишаємо для існуючих
  const staticArticles = [
    {
      id: 'systema-opodatkuvannia-frilanser-2025',
      title: 'Система оподаткування для фрілансерів у Польщі у 2025 році',
      excerpt: 'Повний гід по системах оподаткування для фрілансерів у Польщі у 2025 році.',
      date: '2025-08-23',
      readTime: '8 хв',
      image: '/images/webp/tax-system-guide.webp'
    },
    // ... інші статті
  ]
  
  // Форматуємо MDX пости для відображення
  const formattedMdxPosts = mdxPosts.map(post => ({
    id: post.slug,
    title: post.title,
    excerpt: post.description,
    date: post.date,
    readTime: Math.ceil(post.content.split(' ').length / 200) + ' хв',
    image: post.image,
    tags: post.tags,
    isDynamic: true // Позначка що це динамічний пост
  }))
  
  // Об'єднуємо всі статті
  const allArticles = [...formattedMdxPosts, ...staticArticles]
  
  // Сортуємо за датою
  allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Блог про Фріланс
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Корисні статті для українських фрілансерів у Польщі
          </p>

          <div className="grid gap-6">
            {allArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {article.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        {article.date} • {article.readTime}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  {article.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 4).map((tag: string) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link 
                    href={article.isDynamic ? `/blog/posts/${article.id}` : `/blog/${article.id}`}
                  >
                    <Button className="w-full sm:w-auto">
                      Читати далі →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
