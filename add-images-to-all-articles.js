const fs = require('fs');
const path = require('path');

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
  'babciowe-guide': {
    image: '/images/webp/babciowe-guide.webp',
    alt: 'Babciowe 2025 - догляд за дитиною в Польщі',
    caption: 'Пособие на догляд за дитиною для українських підприємців у Польщі'
  },
  'tax-calculator-guide': {
    image: '/images/webp/tax-calculator-guide.webp',
    alt: 'Калькулятор податків для JDG в Польщі',
    caption: 'Онлайн калькулятор податків для українських підприємців у Польщі'
  },
  'zwrot-podatku-guide': {
    image: '/images/webp/zwrot-podatku-guide.webp',
    alt: 'Повернення податку в Польщі для українців',
    caption: 'Як отримати повернення податку в Польщі'
  },
  'skladka-zdrowotna-guide': {
    image: '/images/webp/skladka-zdrowotna-guide.webp',
    alt: 'Страховий внесок (składka zdrowotna) в Польщі',
    caption: 'Розрахунок страхового внеску для українських підприємців'
  },
  'tax-changes-2025': {
    image: '/images/webp/tax-changes-2025.webp',
    alt: 'Податкові зміни 2025 року в Польщі',
    caption: 'Основні податкові зміни для українців у Польщі 2025'
  },
  'jdg-registration-guide': {
    image: '/images/webp/jdg-registration-guide.webp',
    alt: 'Реєстрація ФОП (JDG) в Польщі для українців',
    caption: 'Покроковий гід реєстрації бізнесу в Польщі'
  },
  'vat-poland-guide': {
    image: '/images/webp/vat-poland-guide.webp',
    alt: 'Податок VAT в Польщі - повний посібник',
    caption: 'Все про податок VAT для українських підприємців у Польщі'
  }
};

function addImageToArticle(articlePath, imageInfo) {
  try {
    let content = fs.readFileSync(articlePath, 'utf8');
    
    // Шукаємо заголовок h1 та опис
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
                className="w-1/2 h-auto rounded-lg shadow-lg mx-auto"
              />
              <p className="text-sm text-gray-500 text-center mt-2">
                ${imageInfo.caption}
              </p>
            </div>`;
        
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

function main() {
  console.log('🚀 Починаю додавання зображень до всіх статей...\n');
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
