/* ==================================================  Override for MainConent ==================================================
Imports module */

import { TableCell } from "@mui/material";

let tableBorder = "3px solid grey";
let tableBorderCell = "1px solid grey";

const monthColsWidth = 100;
let monthColWidth = `${monthColsWidth/3}%`;
let TableCalcMonthCol = "17.2%";

let fontSizeTableHeader = 17

let colWidth = {
    id: 50,
    date: 100,
    pp: 100,
    cat: 100,
    company: 100,
    pop: 200,
    notes: 275,
    que: 100,
    sum: 100,
    tool: 400
};

export let StyleTransactionView = {
    ViewContainer: { 
        marginTop: 5,
        width: "1500x",
    },
    TableContainer: {
        width: "1500px",
        border: tableBorder,
    },
    TableHead: {
        TableHeaderContainer: {
            fontSize: 15,
            display: "flex",
            flexDirection: "row",
        },
        TableHeaderId: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.id}px`,
            border: tableBorderCell,
        },
        TableHeaderDate: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.date}px`,
            border: tableBorderCell,
        },
        TableHeaderPp: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.pp}px`,
            border: tableBorderCell,
        },
        TableHeaderCat: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.cat}px`,
            border: tableBorderCell,
        },
        TableHeaderCompany: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.company}px`,
            border: tableBorderCell,
        },
        TableHeaderPop: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.pop}px`,
            border: tableBorderCell,
        },
        TableHeaderNotes: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.notes}px`,
            border: tableBorderCell,
        },
        TableHeaderQue: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.que}px`,
            border: tableBorderCell,
        },
        TableHeaderSum: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.sum}px`,
            border: tableBorderCell,
        },
        TableHeaderTool: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            width: `${colWidth.tool}px`,
            border: tableBorderCell,
        },
    },
    TableBody: {
        TableBodyContainer: {
            width: "1500px",
            display: "flex",
            flexDirection: "row",
        },
        TableCalcContainerId: {
            width: `${colWidth.id+0.5}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerDate: {
            width: `${colWidth.date}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerPp: {
            width: `${colWidth.pp-0.5}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerCat: {
            width: `${colWidth.cat+3.5}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerCompany: {
            width: `${colWidth.company+1}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerPop: {
            width: `${colWidth.pop+2.5}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerNotes: {
            width: `${colWidth.notes+0.5}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerQue: {
            width: `${colWidth.que}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerSum: {
            width: `${colWidth.sum+1}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
        TableCalcContainerTool: {
            width: `${colWidth.tool}px`,
            textAlign: "center",
            padding: 0,
            border: tableBorderCell,
        },
    }
}