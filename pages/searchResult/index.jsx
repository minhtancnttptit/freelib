import React, { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import Router from "next/router";
import Link from "next/link";

import EBook from "../../src/component/EBook";

const Result = observer(() => {
  const { globalStore } = useContext(MobXProviderContext);
  const { newEbooks } = globalStore;

  const { value } = Router.query;
  const arr = newEbooks.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  console.log(arr);
  return (
    <div>
      <h1>Kết quả tìm kiếm</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {arr.map(({ id, title, cover }) => (
          <Link href="/resource/[id]" as={`/resource/${id}`}>
            <a>
              <EBook
                textEbook={title}
                srcImageEbook={cover}
                countClick={Math.round(Math.random() * 100)}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default Result;
