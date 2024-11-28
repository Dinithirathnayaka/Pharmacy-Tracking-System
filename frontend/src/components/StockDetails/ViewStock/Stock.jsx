import TitleBar from "../../TitleBar/TitleBar";
import viewStk from "../../images/analysis.png";
import AddMedicine from "../AddMedicine/AddMedicine";

import { useAuthContext } from "../../../hooks/useAuthContext";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

import { Outlet } from "react-router-dom";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { visuallyHidden } from "@mui/utils";
import { useState, useMemo, useEffect } from "react";
import TableActions from "../TableActions/TableActions";
import InputBase from "@mui/material/InputBase";
import PopupForm from "../Popup/PopupForm";

import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import { useStockContext } from "../../../hooks/useStockContext";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "batch",
    numeric: false,
    disablePadding: true,
    label: "Batch",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "company",
    numeric: false,
    disablePadding: true,
    label: "Company",
  },
  {
    id: "quantity",
    numeric: false,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "exDate",
    numeric: false,
    disablePadding: true,
    label: "Expiry Date",
  },
  {
    id: "type",
    numeric: false,
    disablePadding: true,
    label: "Type",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: true,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="none"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const [loading, setLoading] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { numSelected, onSearchChange, setDialogOpen, selected, setSelected } =
    props;
  const { dispatch } = useStockContext();

  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    if (event && event.target) {
      const searchValue = event.target.value.toLowerCase();
      setSearch(searchValue);
      onSearchChange(searchValue);
    }
  };

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  const openDialogHandle = () => {
    setDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setLoading(true);

    try {
      // Delete multiple items based on selected _id values
      for (const rowId of selected) {
        const response = await fetch(`/api/doctors/${rowId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const json = await response.json();

        if (!response.ok) {
          console.log("Medicine delete Unsuccessful");
        }

        if (response.ok) {
          dispatch({ type: "DELETE_STOCK", payload: json });
        }
      }
      setSelected([]);
    } catch (error) {
      console.error("Error deleting medicine:", error);
    } finally {
      setLoading(false);
    }
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <Tooltip title="Refresh">
              <IconButton
                color="inherit"
                // onClick={handleRefreshClick}
              >
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Tooltip title="Search">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={handleSearchChange}
              />
            </div>

            <div className={`text-center`}>
              <Tooltip title="Add">
                <IconButton onClick={openDialogHandle}>
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            </div>
          </>
        )}
      </Toolbar>
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this medicine?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              "Delete"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  setDialogOpen: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

const Stock = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); // State for search input
  const [filteredRows, setFilteredRows] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user } = useAuthContext();

  const { rows, dispatch } = useStockContext();

  const userId = user.userid;

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch(`/api/medicines/id/${userId}`);
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: "SET_STOCKS", payload: data });
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false); // Set loading to false after data is fetched
    };

    fetchMedicines();
  }, [userId, dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, _id) => {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      const selectedIndex = selected.indexOf(_id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, _id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
      setSelected(newSelected);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);

    const filteredData = rows.filter((row) =>
      row.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredRows(filteredData);
    setPage(0);
  };

  return (
    <>
      <TitleBar
        titlePic={viewStk}
        title="View Stock"
        description="View available medicine"
      />

      <hr />
      <div className="container">
        <div>
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
              <EnhancedTableToolbar
                numSelected={selected.length}
                setSelected={setSelected}
                onSearchChange={handleSearchChange}
                setDialogOpen={setDialogOpen}
                selected={selected}
              />

              {loading ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              ) : (
                <>
                  {rows.length === 0 && (
                    <TableContainer>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="info">No Data Found!</Alert>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                  {rows.length !== 0 && (
                    <TableContainer>
                      <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="medium"
                      >
                        <EnhancedTableHead
                          numSelected={selected.length}
                          order={order}
                          orderBy={orderBy}
                          onSelectAllClick={handleSelectAllClick}
                          onRequestSort={handleRequestSort}
                          rowCount={rows.length}
                        />

                        <TableBody>
                          {visibleRows
                            .filter((row) => {
                              return search.toLowerCase() === ""
                                ? row
                                : row.name.toLowerCase().includes(search);
                            })
                            .map((row, index) => {
                              const isItemSelected = isSelected(row._id);
                              const labelId = `enhanced-table-checkbox-${index}`;

                              return (
                                <TableRow
                                  hover
                                  onClick={(event) =>
                                    handleClick(event, row._id)
                                  }
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={row._id}
                                  selected={isItemSelected}
                                  sx={{ cursor: "pointer" }}
                                >
                                  <TableCell align="left" padding="checkbox">
                                    <Checkbox
                                      color="primary"
                                      checked={isItemSelected}
                                      inputProps={{
                                        "aria-labelledby": labelId,
                                      }}
                                    />
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                  >
                                    {row.batchNumber}
                                  </TableCell>
                                  <TableCell align="left" padding="none">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="left" padding="none">
                                    {row.company}
                                  </TableCell>
                                  <TableCell align="left" padding="none">
                                    {row.quantity}
                                  </TableCell>
                                  <TableCell align="left" padding="none">
                                    {new Date(
                                      row.expiryDate
                                    ).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",
                                    })}
                                  </TableCell>
                                  <TableCell align="left" padding="none">
                                    {row.type}
                                  </TableCell>
                                  <TableCell align="left" padding="none">
                                    <TableActions rowId={row._id} />
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          {emptyRows > 0 && (
                            <TableRow
                              style={{
                                height: 53 * emptyRows,
                              }}
                            >
                              <TableCell colSpan={6} />
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </>
              )}

              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={
                  filteredRows.length !== 0 ? filteredRows.length : rows.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <PopupForm openPopup={dialogOpen}>
              <AddMedicine setOpenPopup={setDialogOpen} />
            </PopupForm>
          </Box>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Stock;
