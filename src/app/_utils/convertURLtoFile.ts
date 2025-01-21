export const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);

  const data = await response.blob();
  const filename = url.split('/')[3];

  return new File([data], filename, { type: data.type });
};
