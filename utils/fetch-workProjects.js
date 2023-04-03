export async function loadWorkProjets() {
  const workProjectsRequestBody = {
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  };

  const workProjectsOptions = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workProjectsRequestBody),
  };

  const workProjectsDatabaseId = `${process.env.NEXT_PUBLIC_WORK_PROJECTS_NOTION_DB_ID}`;

  const workProjectsRes = await fetch(
    `https://api.notion.com/v1/databases/${workProjectsDatabaseId}/query`,
    workProjectsOptions
  );
  const workProjectsData = await workProjectsRes.json();

  return {
    workProjectsData,
  };
}
