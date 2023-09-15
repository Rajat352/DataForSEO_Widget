"use client";

import { useEffect, useState } from "react";
import OnPageResultsSummary from "./OnPageResultsSummary";
import OnPageMetrics from "./OnPageMetrics";
import OnPageChecks from "./OnPageChecks";

interface DisplayDataType {
  data: string;
}

interface ResType {
  total_pages: number;
  main_domain: string;
  domain_info: {
    checks: {
      sitemap: boolean;
      robots_txt: boolean;
      ssl: boolean;
      http2: boolean;
      test_https_redirect: boolean;
      test_page_not_found: boolean;
      test_www_redirect: boolean;
    };
  };
  page_metrics: {
    links_external: number;
    links_internal: number;
    duplicate_title: number;
    broken_links: number;
    onpage_score: number;
    checks: {
      duplicate_meta_tags: number;
      is_https: number;
      is_http: number;
      low_content_rate: number;
      no_h1_tag: number;
    };
  };
}

const login = process.env.NEXT_PUBLIC_DATAFORSEO_LOGIN;
const pass = process.env.NEXT_PUBLIC_DATAFORSEO_PASS;
const api_url = process.env.NEXT_PUBLIC_DATAFORSEO_URL_SUMMARY;
const base64 = btoa(`${login}:${pass}`); // encode login and pass to base64

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Basic ${base64}`,
});

const DisplayData: React.FC<DisplayDataType> = ({ data }) => {
  const [res, setRes] = useState({} as ResType | null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${api_url}${data}`, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setRes(data.tasks[0].result[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-4xl text-center">Loading...</p>;
  if (!data) return <p className="text-4xl text-center">No profile data</p>;

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center">
        <OnPageResultsSummary results={res.page_metrics.onpage_score} />
        <OnPageMetrics results={res.page_metrics} />
        <OnPageChecks results={res.domain_info.checks} />
      </div>
    </div>
  );
};

export default DisplayData;
