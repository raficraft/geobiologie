import React, { useState, useEffect } from "react";

export default function useGetimage(directory) {
  const [loading, setLoading] = useState(true);
  const [filesInfo, setFilesInfo] = useState([]);

  console.log("WWWWWTTTTTFDFFFFFFFFF", directory);

  useEffect(() => {
    const fetchData = async () => {
      const filesArray = [];
      const callApi = async (folder) => {
        console.log("la pute à ta mere la chienne", folder);
        const bodyRequest = {
          dir: `assets/img/${folder}`,
        };

        const res = await fetch("/api", {
          method: "POST",
          body: JSON.stringify(bodyRequest),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        try {
          const allFiles = await res.json();
          for (const f of allFiles) {
            const i = await import(`/public/assets/img/${folder}${f}`);
            filesArray.push(i.default);
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      for (const folder of directory) {
        await callApi(folder);
      }
      console.log("fuck your mom", filesArray);
      setFilesInfo(filesArray);
    };
    fetchData();
  }, []);

  return [filesInfo, loading];
}
