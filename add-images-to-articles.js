const fs = require('fs');
const path = require('path');

// Мапінг статей та їх зображень
const articleImages = {
  'stawki-ryczalt-2025': {
    image: '/images/webp/stawki-ryczalt-2025.webp',
    alt: 'Stawki ryczałtu 2025 в Польщі - податкові ставки для українських підприємців',
    caption: 'Актуальні податкові ставки ryczałtu 2025 для українців у Польщі'
  },
  'zasilek-chorobowy-guide': {
    image: '/images/webp/zasilek-chorobowy-guide.webp',
    alt: 'Zasiłek chorobowy для JDG 2025 - розрахунок лікарняних в Польщі',
    caption: 'Калькулятор лікарняних виплат для українських підприємців у Польщі'
  },
  'skladka-zdrowotna-guide': {
    image: '/images/webp/skladka-zdrowotna-guide.webp',
    alt: 'Składka zdrowotna в Польщі 2025 - внесок на охорону здоров\'я',
    caption: 'Розрахунок внесків на охорону здоров\'я для українців у Польщі'
  },
  'babciowe-guide': {
    image: '/images/webp/babciowe-guide.webp',
    alt: 'Babciowe в Польщі 2025 - активне батьківство',
    caption: 'Як отримати допомогу babciowe для українців у Польщі'
  },
  'zwrot-podatku-guide': {
    image: '/images/webp/zwrot-podatku-guide.webp',
    alt: 'Zwrot podatku в Польщі - повернення податку для українців',
    caption: 'Інструкція по отриманню повернення податку в Польщі'
  },
  'tax-calculator-guide': {
    image: '/images/webp/tax-calculator-guide.webp',
    alt: 'Калькулятор податків для українців у Польщі 2025',
    caption: 'Розрахунок всіх типів податків для українських підприємців'
  },
  'tax-changes-2025': {
    image: '/images/webp/tax-changes-2025.webp',
    alt: 'Податкові зміни 2025 року в Польщі',
    caption: 'Нові правила оподаткування для JDG та Spółka z o.o.'
  },
  'jdg-registration-guide': {
    image: '/images/webp/jdg-registration.webp',
    alt: 'Реєстрація JDG в Польщі для українців',
    caption: 'Покрокова інструкція по відкриттю бізнесу в Польщі'
  },
  'vat-poland-guide': {
    image: '/images/webp/vat-guide.webp',
    alt: 'VAT в Польщі - основні правила для підприємців',
    caption: 'Гід з податку на додану вартість для українців'
  }
};

function addImageToArticle(articlePath, imageInfo) {
  try {
    let content = fs.readFileSync(articlePath, 'utf8');
    
    // Шукаємо заголовок та опис
    const titlePattern = /<h1[^>]*>.*?<\/h1>/s;
    const descriptionPattern = /<p[^>]*class="text-xl text-gray-600 leading-relaxed"[^>]*>.*?<\/p>/s;
    
    if (titlePattern.test(content) && descriptionPattern.test(content)) {
      // Знаходимо кінець опису
      const descEndPattern = /<\/p>\s*<\/div>/;
      const descEndMatch = content.match(descEndPattern);
      
      if (descEndMatch) {
        const imageHtml = `
            
            {/* Article Image */}
            <div className="my-8">
              <img
                src="${imageInfo.image}"
                alt="${imageInfo.alt}"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 text-center mt-2">
                ${imageInfo.caption}
              </p>
            </div>`;
        
        // Додаємо зображення після опису
        content = content.replace(descEndPattern, `</p>${imageHtml}\n          </div>`);
        
        fs.writeFileSync(articlePath, content, 'utf8');
        console.log(`✅ Додано зображення до ${path.basename(articlePath)}`);
        return true;
      }
    }
    
    console.log(`⚠️  Не вдалося знайти заголовок або опис у ${path.basename(articlePath)}`);
    return false;
  } catch (error) {
    console.error(`❌ Помилка при обробці ${path.basename(articlePath)}:`, error.message);
    return false;
  }
}

// Основна функція
function main() {
  console.log('🚀 Починаю додавання зображень до статей...\n');
  
  const blogDir = 'app/blog';
  let processedCount = 0;
  
  for (const [articleSlug, imageInfo] of Object.entries(articleImages)) {
    const articlePath = path.join(blogDir, articleSlug, 'page.tsx');
    
    if (fs.existsSync(articlePath)) {
      if (addImageToArticle(articlePath, imageInfo)) {
        processedCount++;
      }
    } else {
      console.log(`⚠️  Стаття не знайдена: ${articleSlug}`);
    }
  }
  
  console.log(`\n🎉 Завершено! Оброблено ${processedCount} з ${Object.keys(articleImages).length} статей.`);
}

main();
