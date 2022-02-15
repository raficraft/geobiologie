import React, { useState, useEffect } from "react";

export default function useGetimage(directory, toto) {
  const [loading, setLoading] = useState(true);
  const [filesInfo, setFilesInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const callApi = async () => {
        const bodyRequest = {
          dir: `assets/img/${directory}`,
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
          console.log("CHECK : ", allFiles);
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
    };

    fetchData();
  }, []);

  return [filesInfo, loading];
}
