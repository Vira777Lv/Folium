import React from 'react';


const book = {
  _id: '1',
  img: '../img/garry-potter-1.jpg',
  title: 'Гаррi Поттер i фiлософський камiнь',
  linkTo: 'http://javalibre.com.ua/java-book/book/737',
  author: 'Джоан К. Ролінґ',
  description: 'Життя в комірчині під сходами, доношування одягу за братом, відсутність батьківської турботи - може закінчиться добре. Нагородою стануть незвичайна школа й віддані друзі. А ще - цілий світ, де є чарівне дзеркало і філософський камінь. Але він доступний тільки безкорисливій людині. Щоб дізнатися, чи такий головний герой книги, необхідно дочитати її до кінця.Це перша книга про Гаррі Поттера. Відірвавшись від комп\'ютерів і телеекранів, сотні мільйонів дітей та дорослих у всьому світі ЗНОВУ ЧИТАЮТЬ! Такого успіху не знала жодна художня книга. Казка про хлопчика-чарівника Гаррі Поттера зачарувала всю планету...',
}

function BookDetail(props) {
  const { _id, img, title, linkTo, author, description } = props;

    return(
      <div>
        <article>
          <figure>
            <img src={book.img} />
            <figcaption>
              <a href={linkTo} target="_blank">
                <h2>"{title}"</h2>
              </a>
              <h3>{author}</h3>
              <p>{description}</p>
            </figcaption>
          </figure>
        </article>
        <button>Редагувати</button>
        <button>Видалити</button>
      </div>
    )
}

export default BookDetail;
