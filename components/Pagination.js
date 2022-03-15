import classnames from 'classnames';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { usePagination, DOTS } from '../utils/usePagination';
import { QUERIES } from '../styles/constants';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationWrapper
      className={classnames('pagination-container', { [className]: className })}
    >
      <button
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        type="button"
      >
        <ChevronLeft size={24} className="arrow left" />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button
              key={pageNumber}
              className="pagination-item dots"
              type="button"
            >
              &#8230;
            </button>
          );
        }

        return (
          <button
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber}
            type="button"
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
        type="button"
      >
        <ChevronRight size={24} className="arrow right" />
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  .pagination-item {
    margin: 1rem 4px;
    /* padding: 0 12px; */
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5000px;
    font-size: 1.2rem;
    font-weight: var(--bold);
    color: var(--color-text);

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      color: var(--color-primary);
      cursor: pointer;
    }

    &.selected {
      color: var(--color-text);
      background-color: var(--color-primary);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.25;

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
  @media ${QUERIES.phoneAndDown} {
    .pagination-item {
    }
  }
`;

Pagination.propTypes = {
  onPageChange: propTypes.func,
  totalCount: propTypes.number,
  siblingCount: propTypes.number,
  currentPage: propTypes.number,
  pageSize: propTypes.number,
  className: propTypes.string,
};
