export async function loadPersoProjets() {
  const persoProjetsRequestBody = {
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  };

  const persoProjetsOptions = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(persoProjetsRequestBody),
  };

  const persoProjectsDatabaseId = `${process.env.NEXT_PUBLIC_PERSO_PROJECTS_NOTION_DB_ID}`;

  const persoProjectsRes = await fetch(
    `https://api.notion.com/v1/databases/${persoProjectsDatabaseId}/query`,
    persoProjetsOptions
  );
  const persoProjectsData = await persoProjectsRes.json();

  return {
    persoProjectsData,
  };
}
