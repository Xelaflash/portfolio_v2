export async function loadStack() {
  const StackRequestBody = {
    filter: {
      property: 'Wesbite Display',
      select: {
        equals: 'Yes',
      },
    },
    sorts: [
      {
        property: 'Website order',
        direction: 'ascending',
      },
    ],
  };

  const stackOptions = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(StackRequestBody),
  };

  const stackDatabaseId = `${process.env.NEXT_PUBLIC_STACK_NOTION_DB_ID}`;

  const stackRes = await fetch(
    `https://api.notion.com/v1/databases/${stackDatabaseId}/query`,
    stackOptions
  );
  const stackData = await stackRes.json();

  return {
    stackData,
  };
}
