/* ==================================================  Override for MainConent ==================================================
Imports module */

import { TableCell } from "@mui/material";

let tableBorder = "3px solid grey";
let tableBorderCells = "1px solid grey";

let monthColsWidth = 207;
let cateListWidth = 115;

export let StyleMainContentView = {
    TableContainer: {
        width: 2500,
        border: 0
    },
    CompilationContainer: { 
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        border: 0
    },
    TableHeaderContainer: {
        border: 0,
        fontSize: 15,
        padding: 0,
    },
    TableCateHeadlines: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        padding: 0,
        width: cateListWidth,
        borderBottom: tableBorder,
    },
    TableCateSubHeadlines: {
        fontSize: 10,
        fontWeight: "bold",
        padding: 0,
        textAlign: "center",
        width: cateListWidth,
        borderLeft: tableBorder,
        borderRight: tableBorderCells,
        borderBottom: tableBorderCells,
    },
    TableMonthHeadlines: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        padding: 0,
        width: monthColsWidth,
        borderBottom: tableBorder,
    },
    TableMonthLastHeadlines: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        padding: 0,
        width: monthColsWidth,
        borderRight: 0,
        borderBottom: tableBorder,
    },
    TableFirstSubMonthHeadlines: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "bold",
        padding: 0,
        borderLeft: tableBorder,
        borderRight: tableBorderCells,
        borderBottom: tableBorderCells,
    },
    TableSubMonthHeadlines: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "bold",
        padding: 0,
        width: 66,
        borderRight: tableBorderCells,
        borderBottom: tableBorderCells
    },
    TableSubLastMonthHeadlines: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "bold",
        padding: 0,
        width: 66,
        borderRight: tableBorder,
        borderBottom: tableBorderCells
    },
    TableCalcContainer: {
        padding: 0,
        borderBottom: 0,
    },
    TableCalcMonthContainer: {
        width: monthColsWidth,
        textAlign: "center",
        borderLeft: tableBorderCells
    },
    TableCalcLastMonthContainer: {
        width: monthColsWidth,
        textAlign: "center",
        borderBottom: tableBorderCells,
    },
    TableCalcMonthLastContainerCol3: {
        width: monthColsWidth,
        textAlign: "center",
        borderLeft: tableBorderCells,
        borderRight: tableBorder,
    },
    TableRow: {
        borderBottom: tableBorderCells
    },
    TableLastRow: {
        borderBottom: tableBorder
    },
}
/*
borderTop: tableBorder,
borderRight: tableBorder,
borderBottom: 0,
*/