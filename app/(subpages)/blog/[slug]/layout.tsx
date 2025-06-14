import { Metadata } from 'next';
import getEntries from '@lib/get-entries';
import Navigation from '@components/navigation';
import styles from './layout.module.css';
import { convertMDWithInlineCodeToHTML } from '@lib/utils';

export async function generateStaticParams() {
  const posts = getEntries('posts');
  return posts.map((post) => {
    if (post.slug) {
      return { slug: post.slug }
    }
  });
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = getEntries('posts').find((p) => p?.slug === params.slug);
  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://rivea0.github.io/blog/${params.slug}`,
    },
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `https://rivea0.github.io/blog/${params.slug}`,
      type: 'article',
      siteName: 'Eda Eren',
      locale: 'en_US',
    },
  };
};

function getData({ slug }: { slug: string }) {
  const posts = getEntries('posts');
  const postIndex = posts.findIndex((p) => p?.slug === slug);
  const post = posts[postIndex];
  const { ...rest } = post;

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    ...rest,
  };
}

export default function PostLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) {
  const { previous, next, title, date, tags } = getData(params);

  const dateProper = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <article className={styles.article}>
        <span className={styles.date}>{dateProper}</span>
        <ul className={styles.tags}>
          {tags.length > 1 ? (
            tags.map((tag) => <li key={tag}>{tag}</li>)
          ) : (
            <li>{tags}</li>
          )}
        </ul>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: convertMDWithInlineCodeToHTML(title),
          }}
        ></h1>
        {children}
      </article>
      <Navigation previous={previous} next={next} entryPath="blog" />
    </>
  );
}
