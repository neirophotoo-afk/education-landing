const benefits = [
  ['Современные навыки', 'Вы получите актуальные знания и инструменты, которые нужны рынку.'],
  ['Практическая направленность', 'Учитесь на реальных задачах, кейсах и примерах.'],
  ['Личный подход', 'Сопровождение на каждом этапе обучения и ответы на вопросы.'],
  ['Гибкий онлайн-формат', 'Учитесь из любой точки мира в удобном для себя темпе.'],
  ['Помощь на старте', 'Подскажу, с чего начать, чтобы не тратить время впустую.'],
  ['Поддержка после обучения', 'Помощь с первыми шагами, портфолио и развитием навыков.'],
]

const plans = [
  {
    name: 'Старт',
    subtitle: 'Для знакомства с профессией',
    price: '19 900 ₽',
    items: ['Доступ к базовым урокам', 'Практические задания', 'Проверка куратором', 'Чат поддержки', 'Доступ 3 месяца'],
  },
  {
    name: 'Максимум',
    subtitle: 'Полное погружение и результат',
    price: '29 900 ₽',
    popular: true,
    items: ['Все уроки и модули курса', 'Индивидуальные разборы', 'Проверка всех заданий', 'Личная поддержка куратора', 'Доступ навсегда'],
  },
  {
    name: 'Pro',
    subtitle: 'Для тех, кто хочет больше практики',
    price: '39 900 ₽',
    items: ['Расширенные модули', 'Индивидуальные сессии', 'Проверка без очереди', 'Помощь с портфолио и стартом', 'Доступ навсегда'],
  },
]

const faq = [
  ['Нужны ли знания и опыт?', 'Нет, обучение подойдёт даже если вы начинаете с нуля. Всё объясняется простым языком и пошагово.'],
  ['Сколько длится обучение?', 'Срок зависит от выбранного тарифа и вашего темпа. В среднем обучение занимает от 1 до 3 месяцев.'],
  ['Есть ли обратная связь?', 'Да, в тарифах предусмотрены проверка заданий, поддержка и ответы на вопросы.'],
  ['Что я получу в итоге?', 'Практические навыки, портфолио, уверенность в своих силах и понятный план дальнейшего развития.'],
  ['Можно ли получить консультацию перед оплатой?', 'Да, перед оплатой можно написать в Telegram и задать все вопросы.'],
]

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="#top" aria-label="Главная"><span /><span /></a>
        <nav>
          <a href="#course">О курсе</a>
          <a href="#benefits">Преимущества</a>
          <a href="#tariffs">Тарифы</a>
          <a href="#faq">FAQ</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="navButton" href="#contacts">Связаться</a>
      </header>

      <section className="hero section" id="top">
        <div className="heroText">
          <div className="pill">Екатерина Трегубова</div>
          <h1>Освойте <span>новую</span><br />профессию онлайн</h1>
          <p>Получите востребованные навыки, личную поддержку и практику на реальных задачах — даже если начинаете с нуля.</p>
          <div className="actions">
            <a className="button primary" href="#tariffs">Начать обучение →</a>
            <a className="button ghost" href="#course">Узнать больше</a>
            <a className="button ghost" href="https://t.me/education_mentor" target="_blank">Telegram</a>
          </div>
          <div className="chips">
            <span>Практический подход</span>
            <span>Поддержка куратора</span>
            <span>Доступ навсегда</span>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="halo" />
          <img src="/hero.png" alt="Екатерина с ноутбуком" />
        </div>
      </section>

      <section className="section split" id="about">
        <div>
          <div className="eyebrow">Обо мне</div>
          <h2>Екатерина —<br />куратор проекта</h2>
          <p>Помогаю выбрать направление, разобраться в форматах обучения и уверенно сделать первый шаг в новой профессии.</p>
          <div className="stats">
            <span><b>5+ лет</b> опыта в сфере</span>
            <span><b>1200+</b> учеников</span>
            <span><b>97%</b> довольных студентов</span>
          </div>
        </div>
        <div className="panel listPanel">
          <p>Эксперт по визуальному брендингу и контенту</p>
          <p>Практик с опытом работы с клиентами и проектами</p>
          <p>Обучаю через практику и поддержку</p>
          <p>Всегда на связи и рядом на каждом этапе</p>
        </div>
      </section>

      <section className="section" id="course">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">О проекте</div>
            <h2>Что это за проект?</h2>
            <p>Это онлайн-обучение, где вы с нуля осваиваете востребованную профессию под руководством куратора. Практические уроки, задания и обратная связь помогут собрать портфолио и начать зарабатывать.</p>
          </div>
          <div className="cube" />
        </div>
        <div className="cards three">
          <article className="card"><i>✦</i><h3>Живое обучение</h3><p>Доступ к урокам, вебинарам и материалам в удобном формате.</p></article>
          <article className="card"><i>▣</i><h3>Практика и портфолио</h3><p>Реальные задания и проекты для вашего портфолио с обратной связью.</p></article>
          <article className="card"><i>☷</i><h3>Поддержка и комьюнити</h3><p>Ответы на вопросы, разборы и окружение единомышленников.</p></article>
        </div>
      </section>

      <section className="section" id="benefits">
        <h2 className="center">Почему выбирают обучение <span>со мной</span></h2>
        <div className="cards six">
          {benefits.map(([title, text]) => <article className="card small" key={title}><i>◇</i><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section" id="tariffs">
        <div className="eyebrow centerText">Тарифы</div>
        <div className="pricing">
          {plans.map(plan => (
            <article className={`priceCard ${plan.popular ? 'popular' : ''}`} key={plan.name}>
              {plan.popular && <div className="badge">Рекомендуем</div>}
              <h3>{plan.name}</h3>
              <p>{plan.subtitle}</p>
              <strong>{plan.price}</strong>
              <ul>{plan.items.map(item => <li key={item}>{item}</li>)}</ul>
              <a className={`button ${plan.popular ? 'primary' : 'outline'}`} href="#contacts">Выбрать тариф</a>
            </article>
          ))}
        </div>
        <p className="note">Возможна рассрочка без переплат. Подробности при оплате.</p>
      </section>

      <section className="section panel payment">
        <div>
          <div className="eyebrow">Оплата</div>
          <h2>Оплата и безопасное оформление</h2>
          <p>Оплата проходит через защищённые платёжные системы. После оплаты вы получите доступ и инструкцию на e-mail.</p>
        </div>
        <div className="payGrid">
          <span>Карта<br /><small>МИР / Visa / MasterCard</small></span>
          <span>ЮMoney<br /><small>Быстро и безопасно</small></span>
          <span>Tinkoff Pay<br /><small>Оплата в один клик</small></span>
          <span>СБП<br /><small>Оплата по QR-коду</small></span>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div>
          <h2>Частые вопросы</h2>
          <div className="accordion">
            {faq.map(([q, a], i) => <details key={q} open={i < 2}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
        <div className="question">?</div>
      </section>

      <section className="section cta" id="contacts">
        <div>
          <h2>Готовы выбрать <span>новую</span> профессию?</h2>
          <p>Напишите мне — помогу определиться с направлением, подобрать тариф и ответить на вопросы.</p>
        </div>
        <div className="actions">
          <a className="button primary" href="https://t.me/education_mentor" target="_blank">Написать в Telegram</a>
          <a className="button ghost" href="mailto:hello@career-guide.ru">hello@career-guide.ru</a>
        </div>
      </section>

      <footer>
        <div>
          <a className="logo" href="#top"><span /><span /></a>
          <p>Онлайн-обучение с поддержкой куратора и практикой на результат.</p>
        </div>
        <div>
          <h4>Навигация</h4>
          <a href="#course">О проекте</a><a href="#benefits">Преимущества</a><a href="#tariffs">Тарифы</a><a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Документы</h4>
          <a href="#">Публичная оферта</a><a href="#">Политика конфиденциальности</a><a href="#">Согласие на обработку данных</a>
        </div>
        <div>
          <h4>Контакты</h4>
          <p>Telegram: @education_mentor<br />E-mail: hello@career-guide.ru<br />График: Пн–Пт, 10:00–19:00</p>
        </div>
        <small>© 2025 Екатерина Трегубова. Образовательный проект. Все права защищены. ИНН 123456789012</small>
      </footer>
    </main>
  )
}
