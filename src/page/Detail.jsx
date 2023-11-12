import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../components/Main/data';

export default function Detail() {
  const { post_id } = useParams();

  // categories 배열에서 post_id에 해당하는 메뉴 객체 찾기
  const selectedMenu = categories
    .flatMap(category => category.menu)
    .find(menu => menu.post_id === post_id);

  const menuName = selectedMenu ? selectedMenu.name : "Not Found";

  return (
      <div>
        <h2>Menu Detail Page</h2>
        <p>Menu Name: { menuName }</p>
      </div>
  );

}
