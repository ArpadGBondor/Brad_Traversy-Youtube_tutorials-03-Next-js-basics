import Meta from '../components/Meta';
export default function Custom404() {
  return (
    <>
      <Meta title="404 - This page could not be found - WebDew News" />
      <style jsx>
        {`
          .error {
            text-align: center;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .error h1 {
            display: inline-block;
            border-right: 1px solid rgba(0, 0, 0, 0.3);
            margin: 0;
            margin-right: 20px;
            padding: 10px 23px 10px 0;
            font-size: 24px;
            font-weight: 500;
            vertical-align: top;
          }
          .error h2 {
            font-size: 16px;
            font-weight: normal;
            line-height: inherit;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div className="error">
        <h1>404</h1>
        <h2>This page could not be found.</h2>
      </div>
    </>
  );
}
