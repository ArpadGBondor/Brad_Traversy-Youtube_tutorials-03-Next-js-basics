import Meta from '../components/Meta';

function about() {
  return (
    <div>
      <Meta title="About - WebDew News" />
      <h1>About This App</h1>
      <p>Next.js tutorial project</p>
      <p>Version: 1.0.0</p>
      <p>
        Designed by:{' '}
        <a href="https://youtu.be/mTz0GXj8NN0" rel="nofollow">
          Brad Traversy
        </a>
      </p>
      <p>
        Coded by:{' '}
        <a href="https://arpadgbondor.github.io/CV/" rel="nofollow">
          Árpád Gábor Bondor
        </a>{' '}
        in 2021.
      </p>
      <style jsx>
        {`
          a {
            color: blue;
            text-decoration: underline;
          }

          a:visited {
            color: purple;
          }
        `}
      </style>
    </div>
  );
}

export default about;
