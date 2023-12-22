import SearchInput from '../../components/Search/SearchInput';
import { useState, useEffect } from 'react';
import * as S from './SearchStyle';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [recentKeywords, setRecentKeywords] = useState(
    JSON.parse(localStorage.getItem('recent_keywords')) || [],
  );
  const [inputValue, setInputValue] = useState('');

  const SearchSubmit = (e) => {
    e.preventDefault();
    handleAddRecentKeyword(inputValue);
    navigate(`/search/${inputValue}`);
  };

  // 최근 검색어 추가
  const handleAddRecentKeyword = (keyword) => {
    const isKeywordExist = recentKeywords.some(
      (item) => item.keyword === keyword,
    );
    let updatedKeywords;
    // 이미 검색한 단어인 경우
    if (isKeywordExist) {
      updatedKeywords = recentKeywords.filter(
        (item) => item.keyword !== keyword,
      );
    } else {
      updatedKeywords = recentKeywords;
    }

    const newKeyword = {
      id: Date.now(),
      keyword,
    };

    setRecentKeywords([newKeyword, ...updatedKeywords]);
  };
  // 최근 검색어 선택 삭제
  const handleRemoveRecentKeyword = (id) => {
    const nextKeywords = recentKeywords.filter((keyword) => keyword.id !== id);
    setRecentKeywords(nextKeywords);
  };
  // 최근 검색어 전체 삭제
  const handleRemoveAllRecentKeyword = () => {
    setRecentKeywords([]);
  };
  // 검색했을 때 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem('recent_keywords', JSON.stringify(recentKeywords));
  }, [recentKeywords]);

  return (
    <S.SearchWrap>
      <SearchInput setInputValue={setInputValue} onSubmit={SearchSubmit} />
      <Outlet
        context={{
          recentKeywords: recentKeywords.slice(0, 3),
          handleRemoveRecentKeyword,
          handleRemoveAllRecentKeyword,
        }}
      />
    </S.SearchWrap>
  );
}
