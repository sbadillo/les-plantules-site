import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, compareAsc, format, parseISO } from "date-fns";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Card } from "flowbite-react";

function CardWithImage(post: Post) {
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
      <div className="p-5 hover:bg-gray-100">
        <Link href={post.url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            <Balancer>{post.title}</Balancer>
          </h5>
          <p className="mb-3 font-normal text-gray-700">{post.summary}</p>
        <div className="font-normal text-gray-400">
            Lire plus ..
        </div>
        </Link>
      </div>
    </div>
  );
}

// from https://www.flowbite-react.com/docs/components/card
function CardWithDecorativeImage(post: Post) {
  return (
    // <Link href={post.url}>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={post.thumbnail}
      href={post.url}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Balancer>{post.title}</Balancer>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <Balancer>{post.summary}</Balancer>
      </p>
    </Card>
    // </Link>
  );
}

export default function BlogList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    // <div className="max-w-xl flex">
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {posts.map((post, idx) => (
        <div key={idx} className="flex flex-col max-w-lg mx-auto">
          <CardWithImage {...post} />
        </div>
      ))}
    </div>
  );
}
