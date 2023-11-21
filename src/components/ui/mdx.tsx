import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = (props: any) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

const SkillImage = (props: any) => {
  return (
    <div className="flex items-center gap-4">
      {props.children}
      <p className="text-sm">{props.techName}</p>
    </div>
  );
};

const Callout = (props: any) => {
  return (
    <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
};

const Flex = (props: any) => {
  return <div className="flex items-center gap-4">{props.children}</div>;
};

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  SkillImage,
  Flex,
};

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={components} />
    </article>
  );
};

export default Mdx;
