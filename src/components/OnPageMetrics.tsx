interface OnPageMetricsProps {
  results: {
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

const OnPageMetrics: React.FC<OnPageMetricsProps> = ({ results }) => {
  return (
    <div className="bg-slate-100 grid grid-cols-1 md:grid-cols-4 gap-10 m-5 py-5 text-2xl font-normal border border-solid rounded-lg shadow-4xl">
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.links_external}</div>
        <div>External Links</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.links_internal}</div>
        <div>Internal Links</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.duplicate_title}</div>
        <div>Duplicate Title</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.checks.is_https}</div>
        <div>is https</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.checks.is_http}</div>
        <div>is http</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.checks.no_h1_tag}</div>
        <div>No h1 tag</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.checks.low_content_rate}</div>
        <div>Low content rate</div>
      </div>
      <div className="flex flex-col border border-solid rounded-lg border-4 shadow-lg">
        <div>{results.checks.duplicate_meta_tags}</div>
        <div>Duplicate Meta tags</div>
      </div>
    </div>
  );
};

export default OnPageMetrics;
