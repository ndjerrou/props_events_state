const Card = ({ title, username, desc }) => {
  return (
    <div class='card'>
      <div class='card-content'>
        <div class='media'>
          <div class='media-left'>
            <figure class='image is-48x48'>
              <img
                src='https://bulma.io/images/placeholders/96x96.png'
                alt='Placeholder image'
              />
            </figure>
          </div>
          <div class='media-content'>
            <p class='title is-4'>{title}</p>
            <p class='subtitle is-6'>{username}</p>
          </div>
        </div>

        <div class='content'>
          {desc} <a>@bulmaio</a>.<a href='#'>#css</a>{' '}
          <a href='#'>#responsive</a>
          <br />
          <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};

export default Card;
