interface ItemProps {
  title: string;
  url: string;
  desc: string;
}

interface CategoryProps {
  title: string;
  items: Array<ItemProps>;
}

interface SourceProps {
  [key: string]: Array<ItemProps>;
}

export { ItemProps, CategoryProps, SourceProps };
