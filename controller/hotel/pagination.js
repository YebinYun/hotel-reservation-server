module.exports = (page, totalPost) => {
  const maxPost = 20; // 최대 게시물
  const maxPage = 100; // 보여줄 최대 페이지

  let currentPage = page ? parseInt(page) : 1; // 현재 페이지

  const hidePost = page === 1 ? 0 : (page - 1) * maxPost; // 1페이지는 1~10, 2페이지는 11~20, ...
  const totalPage = Math.ceil(totalPost / maxPost); // 총 페이지 = (전체 페이지 / 10) => 나머지 방지를 위해 메서드 사용

  if (currentPage > totalPage) {
    currentPage = totalPage;
  }

  const startPage = Math.floor((currentPage - 1) / maxPage) * maxPage + 1;
  let endPage = startPage + maxPage - 1; // 시작값이 1이라 마지막 페이지에 -1

  if (endPage > totalPage) {
    endPage = totalPage;
  }

  return { maxPost, currentPage, hidePost, totalPage, startPage, endPage };
};
