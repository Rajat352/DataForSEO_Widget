import React from "react";

interface OnPageChecksProps {
  results: {
    sitemap: boolean;
    robots_txt: boolean;
    ssl: boolean;
    http2: boolean;
    test_https_redirect: boolean;
    test_page_not_found: boolean;
    test_www_redirect: boolean;
  };
}

const OnPageChecks: React.FC<OnPageChecksProps> = ({ results }) => {
  console.log(results);
  return (
    <div className="flex flex-col my-10">
      <div>On Page Checks</div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-100 gap-20 text-2xl font-normal border rounded-lg border-solid ">
        <div className="flex flex-row">
          {results?.sitemap ? (
            <input
              type="checkbox"
              name="sitemap"
              className="checked:bg-green-500"
              checked
              disabled
            />
          ) : (
            <input type="checkbox" name="sitemap" disabled />
          )}
          <label htmlFor="sitemap">Sitemap</label>
        </div>
        <div className="flex flex-row">
          {results?.robots_txt ? (
            <input
              type="checkbox"
              name="robots"
              className="checked-bg-green-500"
              checked
              disabled
            />
          ) : (
            <input type="checkbox" name="robots" disabled />
          )}
          <label htmlFor="sitemap">Robots_txt</label>
        </div>
        <div className="flex flex-row">
          {results?.test_https_redirect ? (
            <input
              type="checkbox"
              name="http_redirect"
              className="checked-bg-green-500"
              checked
              disabled
            />
          ) : (
            <input type="checkbox" name="http_redirect" disabled />
          )}
          <label htmlFor="http_redirect">HTTP Redirect</label>
        </div>
      </div>
    </div>
  );
};

export default OnPageChecks;
