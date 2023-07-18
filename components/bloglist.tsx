import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, compareAsc, format, parseISO } from "date-fns";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

function HorizontalCard(post) {
  /** returns a wider card, with an image
   * see all nice possibilities here
   * https://flowbite.com/docs/components/card/
   */
  return (
    <Link
      href={post.url}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {post.image && (
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={post.image}
          height="500"
          width="500"
          alt=""
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-xl font-sans font-bold  text-gray-900 dark:text-white">
          <Balancer>{post.title}</Balancer>
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.summary}
        </p>
      </div>
    </Link>
  );
}

function CardWithImage(post) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={post.url}>
        {post.thumbnail && (
          <Image
            className="rounded-t-lg"
            src={post.thumbnail}
            alt=""
            width="500"
            height="500"
          />
        )}
      </Link>
      <div className="p-5">
        <Link href={post.url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Balancer>{post.title}</Balancer>
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.summary}
        </p>
        <Link
          href={post.url}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function BlogList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-xl">
      {/* <h1 className="mb-8 text-3xl font-bold">Posts</h1> */}
      {posts.map((post, idx) => (
        <div key={idx} className="my-4">
          <CardWithImage {...post} />
        </div>
      ))}
    </div>
  );
}
