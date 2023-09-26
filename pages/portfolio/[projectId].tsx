import { useRouter } from "next/router";
import React from "react";

function PorfolioProjectPage() {
  const { query } = useRouter();
  return (
    <div>
      <h1>The Portfolio Project {query.projectId} Page </h1>
    </div>
  );
}

export default PorfolioProjectPage;
