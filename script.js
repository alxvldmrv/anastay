
const apartments = [
  {
    title: "ул. Репина, 109",
    price: 3200,
    image: "apartment-1-6.jpg",
    description: "Заселение с 15:00, выезд до 12:00 · до 4 гостей",
    page: "apartment-1.html"
  },
  {
    title: "ул. Репина, 109",
    price: 3100,
    image: "apartment-2-1.jpg",
    description: "Заселение с 16:00, выезд до 14:00 · до 4 гостей",
    page: "apartment-2.html"
  },
  {
    title: "ул. Репина, 109",
    price: 3100,
    image: "apartment-3-1.jpg",
    description: "Заселение с 15:00, выезд до 13:00 · до 4 гостей",
    page: "apartment-3.html"
  },
  {
    title: "ул. Евгения Савкова, 44А",
    price: 2350,
    image: "apartment-4-1.jpg",
    description: "Заселение с 13:00, выезд до 10:00 · до 4 гостей",
    page: "apartment-4.html"
  },
  {
    title: "ул. Евгения Савкова, 46",
    price: 2000,
    image: "apartment-5-1.jpg",
    description: "Заселение с 14:00, выезд до 12:00 · до 2 гостей",
    page: "apartment-5.html"
  },
  {
    title: "ул. Евгения Савкова, 46",
    price: 2000,
    image: "apartment-6-1.jpg",
    description: "Заселение с 13:00, выезд до 11:00 · до 2 гостей",
    page: "apartment-6.html"
  },
  {
    title: "ул. Евгения Савкова, 46/2",
    price: 2000,
    image: "apartment-7-1.jpg",
    description: "Заселение с 14:00, выезд до 12:00 · до 2 гостей",
    page: "apartment-7.html"
  },
  {
    title: "ул. Евгения Савкова, 44А",
    price: 2300,
    image: "apartment-8-1.jpg",
    description: "Заселение с 15:00, выезд до 13:00 · до 6 гостей",
    page: "apartment-8.html"
  },
  {
    title: "ул. Евгения Савкова, 46",
    price: 2000,
    image: "apartment-9-1.jpg",
    description: "Заселение с 15:00, выезд до 13:00 · до 2 гостей",
    page: "apartment-9.html"
  },
  {
    title: "ул. Евгения Савкова, 44Б/2",
    price: 2000,
    image: "apartment-10-1.jpg",
    description: "Заселение с 14:00, выезд до 12:00 · до 2 гостей",
    page: "apartment-10.html"
  },
  {
    title: "ул. Энтузиастов, 36Б/3",
    price: 3400,
    image: "apartment-11-1.jpg",
    description: "Заселение с 15:00, выезд до 12:00 · до 4 гостей",
    page: "apartment-11.html"
  }
];

const telegramUrl = "https://t.me/nastya_miksonova";
const vkUrl = "https://vk.me/write-236946027";

function renderApartments() {
  const container = document.getElementById("apartment-list");

  if (!container) {
    console.error('Не найден контейнер #apartment-list');
    return;
  }

  container.innerHTML = apartments.map((apartment) => `
    <article class="apartment-card">
      <a class="apartment-card__image-link" href="${apartment.page}">
        <img
          class="apartment-card__image"
          src="${apartment.image}"
          alt="${apartment.title}"
          loading="lazy"
          onerror="this.alt='Фотография временно недоступна';"
        >
      </a>

      <div class="apartment-card__content">
        <h3 class="apartment-card__title">${apartment.title}</h3>

        <p class="apartment-card__description">
          ${apartment.description}
        </p>

        <p class="apartment-card__price">
          ${apartment.price.toLocaleString("ru-RU")} ₽
          <span>/ сутки</span>
        </p>

        <a class="apartment-card__link" href="${apartment.page}">
          Подробнее →
        </a>

        <div class="apartment-card__buttons">
          <a
            class="apartment-card__button"
            href="${telegramUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Забронировать в Telegram
          </a>

          <a
            class="apartment-card__button"
            href="${vkUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Забронировать ВКонтакте
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderApartments);
} else {
  renderApartments();
}
