import Corpus from '@/components/pages/index/Corpus';
import Meta from "@/components/metas/Meta";
import { propsWithPayClicked } from "@/types/propsWithPayClicked";

export default function Home({ setPayClicked }: propsWithPayClicked<{}>) {

  return (
    <div>
      <Meta />
      <main className="sm:px-2 md:px-10 lg:px-16">
        <Corpus setPayClicked={setPayClicked} />
      </main>
    </div>
  );
}
