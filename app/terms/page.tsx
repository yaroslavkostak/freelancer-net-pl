import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Умови використання</h1>
            <p className="text-xl text-gray-600">
              Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>1. Загальні положення</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ці Умови використання регулюють використання веб-сайту freelancer.org.pl та всіх пов'язаних з ним послуг.
              </p>
              <p>
                Використовуючи наш сайт, ви погоджуєтеся з цими умовами. Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте наш сайт.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>2. Опис послуг</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Наш сайт надає інформаційні послуги щодо бухгалтерських послуг у Польщі, зокрема:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Інформація про реєстрацію бізнесу в Польщі</li>
                <li>Консультації щодо бухгалтерських послуг</li>
                <li>Посилання на партнерські сервіси (inFakt)</li>
                <li>Контактна інформація для отримання додаткових консультацій</li>
              </ul>
              <p>
                <strong>Важливо:</strong> Ми не надаємо безпосередні бухгалтерські послуги. Наш сайт є інформаційним ресурсом та партнерським майданчиком.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>3. Партнерські посилання</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Наш сайт містить партнерські посилання на сервіс inFakt. Це означає, що:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>При переході за нашими посиланнями та реєстрації в inFakt ми можемо отримати комісію</li>
                <li>Ця комісія не впливає на ціну послуг для вас</li>
                <li>Всі послуги inFakt надаються на їх власних умовах</li>
                <li>Ми не несемо відповідальності за якість послуг inFakt</li>
                <li>Для отримання послуг звертайтеся безпосередньо до inFakt</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>4. Інформаційні сайти</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>freelancer.org.pl</strong> - це інформаційний сайт, який:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Надають корисну інформацію про бухгалтерські послуги у Польщі</li>
                <li>Працюють як партнерські майданчики inFakt</li>
                <li>Не надають безпосередніх послуг</li>
                <li>Допомагають користувачам зробити інформований вибір</li>
              </ul>
              <p>
                Сайт має мету надати якісну інформацію про бухгалтерські послуги та допомогти підприємцям знайти відповідні рішення.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>5. Обмеження відповідальності</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Інформація на нашому сайті надається "як є" без будь-яких гарантій. Ми не гарантуємо:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Точність або повноту інформації</li>
                <li>Безперервну доступність сайту</li>
                <li>Відсутність помилок або вірусів</li>
                <li>Відповідність інформації вашим конкретним потребам</li>
              </ul>
              <p>
                Ми не несемо відповідальності за будь-які збитки, що виникають внаслідок використання нашого сайту або інформації на ньому.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>6. Інтелектуальна власність</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Весь контент на нашому сайті, включаючи текст, зображення, логотипи та дизайн, є власністю нашого сайту або використовується з дозволу власників.
              </p>
              <p>
                Забороняється:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Копіювати або розповсюджувати контент без дозволу</li>
                <li>Використовувати наш контент для комерційних цілей</li>
                <li>Модифікувати або створювати похідні роботи</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>7. Використання сайту</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Ви зобов'язуєтеся не використовувати наш сайт для:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Порушення законів або прав третіх осіб</li>
                <li>Розповсюдження шкідливого контенту</li>
                <li>Спаму або небажаних повідомлень</li>
                <li>Спроби несанкціонованого доступу до систем</li>
                <li>Порушення роботи сайту</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>8. Зміни умов</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ми залишаємо за собою право змінювати ці умови в будь-який час. Про значні зміни ми повідомимо через наш сайт.
              </p>
              <p>
                Продовження використання сайту після зміни умов означає вашу згоду з новими умовами.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>9. Примірна юрисдикція</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ці умови регулюються законодавством Польщі. Будь-які спори будуть вирішуватися в судах Польщі.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg mt-6">
            <CardHeader>
              <CardTitle>10. Контактна інформація</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Якщо у вас є питання щодо цих умов, зв'яжіться з нами:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@freelancer.org.pl</p>
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