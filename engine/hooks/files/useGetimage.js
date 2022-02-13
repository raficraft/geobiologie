import React, { useState, useEffect } from "react";

export default function useGetimage(directory, toto) {
  const [loading, setLoading] = useState(true);
  const [filesInfo, setFilesInfo] = useState([]);

  useEffect(async () => {
    const callApi = async () => {
      const bodyRequest = {
        dir: `/public/assets/img/${directory}`,
      };

      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(bodyRequest),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const filesArray = [];

      try {
        const allFiles = await res.json();
        for (const f of allFiles) {
          const i = await import(`/public/assets/img/${directory}${f}`);

          filesArray.push(i.default);
        }
        setLoading(false);
        return filesArray;
      } catch (error) {
        console.log(error);
      }
    };
    const result = await callApi();
    setFilesInfo(result);
  }, []);

  return [filesInfo, loading];
}
