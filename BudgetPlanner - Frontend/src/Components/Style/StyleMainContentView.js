/* ==================================================  Override for MainConent ==================================================
Imports module */

import { TableCell } from "@mui/material";

let tableBorder = "3px solid grey";
let tableBorderCell = "1px solid grey";

const monthColsWidth = 100;
let monthColWidth = `${monthColsWidth/3}%`;
let TableCalcMonthCol = "17.2%";

let fontSizeTableHeader = 17
let fontSizeTableSubHeader = 13;
let fontSizeCatList = fontSizeTableSubHeader;
let fontSizeCatListCalculations = 16;

export let StyleMainContentView = {
    TableContainer1: {
        width: 3100,
        border: tableBorder,
    },
    TableContainer2: {
        width: 3100,
        border: tableBorder,
        marginTop: "40px",

    },
    CompilationContainer: { 
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        width: 1700,
        marginLeft: "-35px",
        overflow: "hidden"
    },
    TableHead: {
        TableHeaderContainer: {
            fontSize: 15,
            padding: 0,
            border: 0,
        },
        TableHeaderCatContainer: {
            fontSize: 15,
            padding: 0,
        },
        TableHeaderCatContainerNestedTable: {
            marginLeft: "-1px",
            width: "101%",
        },
        TableHeaderMonthContainer: {
            fontSize: 15,
            padding: 0,
            ovwerflow: "scroll"
        },
        TableCatHeadlines: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            borderBottom: tableBorder,
        },
        TableFirstSubCatHeadlines: {
            fontSize: fontSizeTableSubHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            borderRight: tableBorderCell,
            borderBottom: tableBorderCell,
        },

        TableMonthHeadlines: {
            fontSize: fontSizeTableHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            borderBottom: tableBorder,
            width: 500,
        },
        TableMonthLastHeadlines: {
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            borderRight: 0,
            borderBottom: tableBorder,
        },
        TableSubMonthHeadlines: {
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            borderRight: tableBorderCell,
            borderBottom: tableBorderCell,
            fontSize: fontSizeTableSubHeader,
            width: monthColWidth,
        },
        TableSubLastMonthHeadlines: {
            fontSize: fontSizeTableSubHeader,
            textAlign: "center",
            fontWeight: "bold",
            padding: 0,
            borderRight: tableBorder,
            borderBottom: tableBorderCell
        },
    },
    TableBody: {
        TableCatSubHeadlinesT1: {
            fontSize: fontSizeCatList,
            fontWeight: "bold",
            padding: 0,
            textAlign: "center",
            borderTop: 0,
            borderBottom: tableBorderCell,
            borderLeft: tableBorder,
            borderRight: tableBorderCell,
            width: "81px"
        },
        TableCatSubHeadlinesT2: {
            fontSize: fontSizeCatList,
            fontWeight: "bold",
            padding: 0,
            textAlign: "center",
            borderTop: 0,
            borderBottom: tableBorderCell,
            borderLeft: tableBorder,
            width: "218px"
        },



        TableCatSubFirstHeadline: {
            fontSize: fontSizeCatList,
            fontWeight: "bold",
            padding: 0,
            textAlign: "center",
            borderLeft: tableBorder,
        },
        TableCatSubLastHeadline: {
            fontSize: fontSizeCatList,
            fontWeight: "bold",
            padding: 0,
            textAlign: "center",
            borderLeft: tableBorder,
        },
        TableCatSubTotHeadlineT1: {
            fontSize: fontSizeCatListCalculations,
            fontWeight: "bold",
            padding: 0,
            textAlign: "center",
            borderLeft: tableBorder,
            backgroundColor: "green",

        },
        TableCatSubTotHeadlineT2: {
            fontSize: fontSizeCatListCalculations,
            fontWeight: "bold",
            padding: 0,
            textAlign: "center",
            borderLeft: tableBorder,
            backgroundColor: "red",
        },
        
        TableCalcTotContainerT1: {
            fontSize: fontSizeCatListCalculations,
            padding: 0,
            textAlign: "center",
            borderTop: 0,
            borderRight: tableBorderCell,
            borderBottom: 0,
            borderLeft: tableBorderCell,
            backgroundColor: "green",
        },
        TableCalcTotContainerT2: {
            borderBottom: 0,
            backgroundColor: "red",
        },
        TableCalcContainer: {
            padding: 0,
            borderBottom: tableBorderCell,
        },
        TableCalcTotMonthCol: {
            textAlign: "center",
            fontSize: fontSizeCatListCalculations,
            width: monthColWidth,
            fontWeight: "bold",
            padding: 0,
            borderTop: 0,
            borderRight: tableBorderCell,
            borderBottom: 0,
            borderLeft: 0,
        },
        TableCalcMonthCols: {
            textAlign: "center",
            padding: 0,
            fontSize: fontSizeTableSubHeader,
            width: monthColWidth,
            borderTop: 0,
            borderRight: tableBorderCell,
            borderBottom: 0,
            borderLeft: 0,
            color: "black",
            fontWeight: "normal"
        },
        TableCalcMonthCol3DiffPos: {
            textAlign: "center",
            padding: 0,
            fontSize: fontSizeTableSubHeader,
            width: monthColWidth,
            borderTop: 0,
            borderRight: tableBorderCell,
            borderBottom: 0,
            borderLeft: 0,
            color: "green",
            fontWeight: "bold"
        },
        TableCalcMonthCol3DiffNeg: {
            textAlign: "center",
            padding: 0,
            fontSize: fontSizeTableSubHeader,
            width: monthColWidth,
            borderTop: 0,
            borderRight: tableBorderCell,
            borderBottom: 0,
            borderLeft: 0,
            color: "red",
            fontWeight: "bold"
        },
        TableCalcTotMonthCol3: {
            textAlign: "center",
            fontSize: fontSizeCatListCalculations,
            width: "100px",
            fontWeight: "bold",
            padding: 0,
            borderTop: 0,
            borderRight: tableBorderCell,
            borderBottom: 0,
            borderLeft: 0,
        },
    }
}