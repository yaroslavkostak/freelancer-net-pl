import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Політика конфіденційності</h1>
            <p className="text-xl text-gray-600">
              Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>1. Загальна інформація</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ця Політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію при використанні нашого веб-сайту freelancer.net.pl.
              </p>
              <p>
                Ми зобов'язуємося захищати вашу конфіденційність та забезпечувати безпечне використання нашого сайту відповідно до Регламенту ЄС 2016/679 (GDPR) та інших застосовних законів про захист даних.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>2. Про наш сайт</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>freelancer.net.pl</strong> - це інформаційний сайт, створений для надання корисної інформації про бухгалтерські послуги у Польщі. Наш сайт є партнерським майданчиком сервісу inFakt.
              </p>
              <p>
                Сайт надає детальну інформацію про послуги inFakt, включаючи:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Детальний опис послуг inFakt</li>
                <li>Інструкції з реєстрації та використання</li>
                <li>Відгуки користувачів</li>
                <li>Порівняння з іншими сервісами</li>
                <li>Корисні статті та поради</li>
              </ul>
              <p>
                Сайт працює як інформаційний ресурс та партнерський майданчик inFakt, надаючи користувачам зручний доступ до інформації про бухгалтерські послуги у Польщі.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>3. Яку інформацію ми збираємо</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3.1 Інформація, яку ви надаєте нам:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Ім'я та контактна інформація (email, телефон)</li>
                  <li>Інформація про ваш бізнес та запити</li>
                  <li>Повідомлення, які ви надсилаєте через контактну форму</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3.2 Автоматично збирається інформація:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>IP-адреса та технічна інформація про браузер</li>
                  <li>Інформація про використання сайту (сторінки, час перебування)</li>
                  <li>Cookies та подібні технології</li>
                  <li>Дані про переходи за партнерськими посиланнями</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>4. Як ми використовуємо вашу інформацію</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Ми використовуємо зібрану інформацію для:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Відповіді на ваші запити та надання консультацій</li>
                <li>Покращення нашого сайту та послуг</li>
                <li>Надсилання інформації про наші послуги (з вашої згоди)</li>
                <li>Відстеження ефективності партнерської програми</li>
                <li>Дотримання юридичних зобов'язань</li>
                <li>Захисту наших прав та безпеки</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>5. Партнерські посилання та відстеження</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Наш сайт містить партнерські посилання на сервіс inFakt. Коли ви переходите за цими посиланнями:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Ми можемо отримати комісію за успішну реєстрацію</li>
                <li>inFakt може отримати інформацію про те, що ви прийшли з нашого сайту</li>
                <li>Ваша інформація обробляється відповідно до політики конфіденційності inFakt</li>
              </ul>
              <p>
                <strong>Важливо:</strong> Ми не передаємо вашу особисту інформацію в inFakt без вашої явної згоди.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>6. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Наш сайт використовує cookies для покращення користувацького досвіду. Cookies - це невеликі текстові файли, які зберігаються на вашому пристрої.
              </p>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Типи cookies, які ми використовуємо:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Необхідні cookies:</strong> для базового функціонування сайту</li>
                  <li><strong>Аналітичні cookies:</strong> для аналізу використання сайту</li>
                  <li><strong>Функціональні cookies:</strong> для запам'ятовування ваших налаштувань</li>
                  <li><strong>Партнерські cookies:</strong> для відстеження партнерських посилань</li>
                </ul>
              </div>
              <p>
                Ви можете керувати налаштуваннями cookies у вашому браузері або відхилити їх використання.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>7. Поширення інформації</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам, крім випадків:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Коли це необхідно для надання послуг (наприклад, партнерам inFakt)</li>
                <li>Коли це вимагається законом</li>
                <li>З вашої явної згоди</li>
                <li>Для захисту наших прав та безпеки</li>
                <li>Для відстеження партнерської програми (без передачі особистих даних)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>8. Безпека даних</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ми впроваджуємо відповідні технічні та організаційні заходи для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розкриття або знищення.
              </p>
              <p>
                Однак жоден метод передачі через інтернет або електронного зберігання не є 100% безпечним, тому ми не можемо гарантувати абсолютну безпеку.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>9. Ваші права</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Відповідно до GDPR, ви маєте право:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Отримати доступ до своїх особистих даних</li>
                <li>Виправити неточні дані</li>
                <li>Видалити свої дані</li>
                <li>Обмежити обробку даних</li>
                <li>Перенести свої дані</li>
                <li>Відкликати згоду на обробку даних</li>
                <li>Подати скаргу до органу з нагляду</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>10. Зміни до цієї політики</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ми можемо періодично оновлювати цю Політику конфіденційності. Про будь-які значні зміни ми повідомимо вас через наш сайт або електронну пошту.
              </p>
              <p>
                Рекомендуємо регулярно переглядати цю сторінку для ознайомлення з актуальною версією політики.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>11. Контактна інформація</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Якщо у вас є питання щодо цієї Політики конфіденційності або обробки ваших даних, зв'яжіться з нами:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@freelancer.net.pl</p>
                <p><strong>Адреса inFakt:</strong></p>
                <p>inFakt Sp. z o.o.</p>
                <p>31-153 Kraków, ul. Szlak 49</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Примітка:</strong> Для отримання бухгалтерських послуг звертайтеся безпосередньо до inFakt за контактами, вказаними на сторінці "Контакти".
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 