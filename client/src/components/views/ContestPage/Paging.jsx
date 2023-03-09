import React, { useState } from "react";
import Paging_styled from '../../styled/yongtae/_Paging.scss';
import Pagination from "react-js-pagination";
import FilterButtons from './FilterButtons2';

function Paging() {
  const [page, set_page] = useState(1);

  const handlePageChange = (page) => {
    set_page(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={60}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
     />
  );

  
};

export default Paging;