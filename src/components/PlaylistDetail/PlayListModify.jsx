import styled from 'styled-components';
import PlayListItem from '../common/PlayList/PlayListItem';
import TestImg from '../../img/thumbnail-img.svg';
import PlayList from '../common/PlayList/PlayList';
import CloseIcon from '../../img/close-icon.svg';
import OrderChangeIcon from '../../img/hamburger-icon.svg';
export default function PlayListModify() {
  const handleOrderChange = (e) => {
    // 순서 변경 함수
  };
  return (
    <PlayListModifyWrap>
      <PlayList>
        <li>
          <PlayListItem
            modify={handleOrderChange}
            img={TestImg}
            title='ETA'
            info='NewJeans · 2:32'
          >
            <button>
              <img src={CloseIcon} alt='삭제' />
            </button>
          </PlayListItem>
        </li>
        <li>
          <PlayListItem
            modify={handleOrderChange}
            img={TestImg}
            title='ETA'
            info='NewJeans · 2:32'
          >
            <button>
              <img src={CloseIcon} alt='삭제' />
            </button>
          </PlayListItem>
        </li>
        <li>
          <PlayListItem
            modify={handleOrderChange}
            img={TestImg}
            title='ETA'
            info='NewJeans · 2:32'
          >
            <button>
              <img src={CloseIcon} alt='삭제' />
            </button>
          </PlayListItem>
        </li>
        <li>
          <PlayListItem
            modify={handleOrderChange}
            img={TestImg}
            title='ETA'
            info='NewJeans · 2:32'
          >
            <button>
              <img src={CloseIcon} alt='삭제' />
            </button>
          </PlayListItem>
        </li>
        <li>
          <PlayListItem
            modify={handleOrderChange}
            img={TestImg}
            title='ETA'
            info='NewJeans · 2:32'
          >
            <button>
              <img src={CloseIcon} alt='삭제' />
            </button>
          </PlayListItem>
        </li>
      </PlayList>
    </PlayListModifyWrap>
  );
}
const PlayListModifyWrap = styled.div`
  padding: 0 16px;
`;
