// 관리자 기능이 없어서 안 보여요.
import { useState, useEffect } from 'react';
import * as M from './MyPageStyle'; 

const OrderManagement = () => {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [orderList, setOrderList] = useState([]);
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const response = await fetch(`http://localhost:3000/app/adminpage`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': authToken,
          },
        });
        console.log(response);
        console.log();
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log(result);
  
        setOrderList(result.result);
      } catch (error) {
        console.error('주문 목록을 불러오는 중 에러 발생:', error);
      }
    };
    fetchOrderList();
  }, []);

  const totalEntries = orderList.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);

  const getCurrentPageEntries = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orderList.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <M.ReviewContainer>
      {totalEntries === 0 ? (
        <M.LoginMessage>첫 주문을 시작해보세요!</M.LoginMessage>
      ) : (
        getCurrentPageEntries().map((order) => (
          <M.ReviewList key={order.no}>
            <M.ReviewListContainer>
              <M.ReviewId>{order.no} {order.nickname}</M.ReviewId>
              <M.SubContent>{new Date().toLocaleDateString()}</M.SubContent>
              <M.ReviewContent>
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Total Price</th>
                      <th>Nickname</th>
                      <th>Food Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={order.no}>
                      <td>{order.id}</td>
                      <td>{order.food_title}</td>
                    </tr>
                  </tbody>
                </table>
              </M.ReviewContent>
            </M.ReviewListContainer>
          </M.ReviewList>
        ))
      )}
      {/* 페이지네이션 컴포넌트 추가 */}
      <M.Pagination>
        <ul>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </li>
        ))}
    </ul>
      </M.Pagination>
    </M.ReviewContainer>
  );
};

export default OrderManagement;
