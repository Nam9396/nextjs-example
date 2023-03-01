
export const changeCanonical = (canonical) => {
  const regex = /(https:\/\/bibohealth.com)|(phat-trien\/)|(cham-soc-tre\/)|(dinh-duong-2\/)|(dinh-duong\/)|(be-khoe\/)|(be-benh\/)|(so-cap-cuu\/)|(an-dam\/)|(dinh-duong-hang-ngay\/)|(thuc-pham-bo-sung\/)|(so-sinh-nhu-nhi\/)|(day-thi\/)|(di-hoc\/)|(rang-sua\/)|\d{2}|\d{4}|\//gi;
  let finalSlug = canonical.replace(regex, "");
  let canonicalURL = "https://bacsichobeyeu.com/posts/" + finalSlug;
  return canonicalURL;
};

export const changeTitle = (title) => {
  const regex = /(\| BiboHealth)/gi;
  let finalTitle = title.replace(regex, "| bacsichobeyeu");
  return finalTitle;
};

