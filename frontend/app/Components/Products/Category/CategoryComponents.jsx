import Link from "next/link";

const CategoryComponents = () => {
  const categories = ["Python", "JavaScript", "React", "Node.js", "Django", "Next.js", "TailwindCSS", "TypeScript", "TailwindCSS", "TypeScript", "GraphQL", "MongoDB"];



  return (
    <div className="container mt-2 w-full">

        <div className="w-full  flex flex-row justify-center gap-4 flex-wrap mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="">
                <Link href="" className="border border-gray-400 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white duration-200 text-sm font-lato rounded-lg px-3 font-semibold text-gray-700 py-1 block text-center">
                  {category}
                </Link>
              </div>
            ))}
        </div>
      </div>
  );
};

export default CategoryComponents;
