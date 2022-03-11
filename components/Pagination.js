import classnames from 'classnames';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { usePagination, DOTS } from '../utils/usePagination';

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
  .pagination-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: 1rem 4px;
    color: var(--color-text);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 1.2rem;
    font-weight: var(--bold);
    min-width: 32px;

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
`;

Pagination.propTypes = {
  onPageChange: propTypes.func,
  totalCount: propTypes.number,
  siblingCount: propTypes.number,
  currentPage: propTypes.number,
  pageSize: propTypes.number,
  className: propTypes.string,
};
