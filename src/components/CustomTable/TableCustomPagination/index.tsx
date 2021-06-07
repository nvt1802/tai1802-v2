import { TablePagination } from '@material-ui/core'
import React, { FC } from 'react'

interface TableCustomPaginationProps {
  rowsPerPageOptions: any
  component: any
  count: any
  rowsPerPage: any
  setRowsPerPage: any
  page: any
  setPage: any
}

const TableCustomPagination: FC<TableCustomPaginationProps> = ({
  rowsPerPageOptions,
  component,
  count,
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
}) => {

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  };

  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component={component}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}

export default TableCustomPagination