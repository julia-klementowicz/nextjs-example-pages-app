import type { GetServerSideProps, NextPage } from 'next';

interface PageProps {
  referer: string | null;
  userAgent: string | null;
  contentType: string | null;
  Authorization: string | null;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  req,
}) => {
  const referer = req.headers.referer || null;
  const userAgent = req.headers['user-agent'] || null;
  const contentType = req.headers['content-type'] || null;
  const Authorization = (req.headers['Authorization'] as string) || null;

  return {
    props: {
      referer,
      userAgent,
      contentType,
      Authorization,
    },
  };
};

function NewPage({
  referer,
  userAgent,
  contentType,
  Authorization,
}: PageProps) {
  return (
    <div>
      <p>Referer: {referer}</p>
      <p>User Agent: {userAgent}</p>
      <p>Content Type: {contentType}</p>
      <p>Authorization: {Authorization}</p>
    </div>
  );
}
export default NewPage;
