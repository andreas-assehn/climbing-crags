// import { useState } from 'react';
import Card from './Card';

function ListSection({ title, items }) {
  // const [shownItems, setShownItems] = useState(items);
  return (
    <>
      <div>
        <h3 className="text-5xl pb-10 pt-16 bold">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {items.map((item, i) => {
            return <Card key={i} item={item} type={title.toLowerCase()} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ListSection;
