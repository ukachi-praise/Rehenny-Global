export const urlFor = (source: any) => {
  const builder = {
    width: (width: number) => builder,
    height: (height: number) => builder,
    fit: (fit: string) => builder,
    auto: (format: string) => builder,
    url: () => {
      return "https://via.placeholder.com/1200x800.png?text=Image+Not+Found";
    },
  };
  return builder;
};
